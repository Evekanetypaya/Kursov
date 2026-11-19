import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool } from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Проверка здоровья сервера и подключения к PostgreSQL
app.get("/api/health", async (req, res) => {
  try {
    const servicesCount = await pool.query("SELECT COUNT(*) FROM services;");
    const proceduresCount = await pool.query("SELECT COUNT(*) FROM procedures;");
    const appointmentsCount = await pool.query("SELECT COUNT(*) FROM appointments;");

    res.json({
      status: "ok",
      database: "PostgreSQL",
      connected: true,
      stats: {
        services: Number(servicesCount.rows[0].count),
        procedures: Number(proceduresCount.rows[0].count),
        appointments: Number(appointmentsCount.rows[0].count),
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Database connection failed",
      error: error.message,
    });
  }
});

// Получить направления услуг
app.get("/api/services", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM services ORDER BY id ASC;");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Получить список процедур (прайс-лист)
app.get("/api/procedures", async (req, res) => {
  try {
    const { category, featured } = req.query;
    let query = "SELECT * FROM procedures WHERE 1=1";
    const params = [];

    if (category) {
      params.push(category);
      query += ` AND category = $${params.length}`;
    }

    if (featured !== undefined) {
      params.push(featured === "true");
      query += ` AND is_featured = $${params.length}`;
    }

    query += " ORDER BY id ASC";
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Получить мастеров и специалистов
app.get("/api/specialists", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM specialists ORDER BY id ASC;");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Получить отзывы клиентов
app.get("/api/testimonials", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM testimonials WHERE is_published = true ORDER BY id ASC;"
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Получить преимущества салона
app.get("/api/benefits", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM benefits ORDER BY order_index ASC;");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Получить статьи блога
app.get("/api/blog", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM blog_posts ORDER BY id ASC;");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Получить информацию о салоне и контакты
app.get("/api/salon-info", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM salon_info LIMIT 1;");
    res.json(result.rows[0] || {});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Получить все записи клиентов (для просмотра администратором)
app.get("/api/appointments", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM appointments ORDER BY created_at DESC;"
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Создать новую запись через форму на сайте
app.post("/api/appointments", async (req, res) => {
  try {
    const { name, email, phone, service, note } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        error: "Пожалуйста, заполните имя, email и номер телефона.",
      });
    }

    const query = `
      INSERT INTO appointments (client_name, email, phone, service_needed, note, status)
      VALUES ($1, $2, $3, $4, $5, 'Новая')
      RETURNING *;
    `;
    const values = [name, email, phone, service || "General Service", note || ""];
    const result = await pool.query(query, values);

    res.status(201).json({
      success: true,
      message: "Запись успешно оформлена и сохранена в базу данных!",
      appointment: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Beautyness API server running on port ${PORT}`);
});
