-- ========================================================
-- База данных для сайта салона красоты и спа "Beautyness"
-- Подходит для просмотра и управления через DBeaver
-- ========================================================

-- 1. Таблица основных направлений услуг (Services)
CREATE TABLE IF NOT EXISTS services (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_key VARCHAR(255),
    badge VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Таблица процедур и прайс-листа (Procedures / Price List)
CREATE TABLE IF NOT EXISTS procedures (
    id SERIAL PRIMARY KEY,
    service_id INT REFERENCES services(id) ON DELETE SET NULL,
    category VARCHAR(100) NOT NULL,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    formatted_price VARCHAR(50) NOT NULL,
    duration_minutes INT DEFAULT 60,
    description TEXT NOT NULL,
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Таблица мастеров и специалистов салона (Specialists)
CREATE TABLE IF NOT EXISTS specialists (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_key VARCHAR(255),
    experience_years INT DEFAULT 5,
    rating NUMERIC(2, 1) DEFAULT 5.0,
    instagram VARCHAR(255),
    facebook VARCHAR(255),
    twitter VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Таблица отзывов клиентов (Testimonials)
CREATE TABLE IF NOT EXISTS testimonials (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    country VARCHAR(100) NOT NULL,
    avatar_key VARCHAR(255),
    rating INT DEFAULT 5,
    review_text TEXT NOT NULL,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Таблица преимуществ (Benefits)
CREATE TABLE IF NOT EXISTS benefits (
    id SERIAL PRIMARY KEY,
    title_line1 VARCHAR(100) NOT NULL,
    title_line2 VARCHAR(100),
    description TEXT NOT NULL,
    icon_key VARCHAR(255),
    order_index INT DEFAULT 1
);

-- 6. Таблица новостей и статей блога (Blog Posts)
CREATE TABLE IF NOT EXISTS blog_posts (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT,
    author VARCHAR(100) NOT NULL,
    post_date VARCHAR(50) NOT NULL,
    image_key VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. Таблица онлайн-записей клиентов на процедуры (Appointments)
CREATE TABLE IF NOT EXISTS appointments (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    service_needed VARCHAR(255) NOT NULL,
    note TEXT,
    status VARCHAR(50) DEFAULT 'Новая',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 8. Таблица общей информации и контактов салона (Salon Info)
CREATE TABLE IF NOT EXISTS salon_info (
    id SERIAL PRIMARY KEY,
    salon_name VARCHAR(100) NOT NULL,
    tagline VARCHAR(255),
    email VARCHAR(100),
    phone VARCHAR(100),
    address TEXT,
    discount_percent INT DEFAULT 50,
    working_hours JSONB,
    social_links JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Индексы для быстрого поиска и фильтрации
CREATE INDEX IF NOT EXISTS idx_procedures_service_id ON procedures(service_id);
CREATE INDEX IF NOT EXISTS idx_procedures_category ON procedures(category);
CREATE INDEX IF NOT EXISTS idx_procedures_price ON procedures(price);
CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON appointments(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);

-- ========================================================
-- НАПОЛНЕНИЕ ДАННЫМИ (SEED DATA)
-- ========================================================

TRUNCATE TABLE appointments, salon_info, blog_posts, benefits, testimonials, specialists, procedures, services RESTART IDENTITY CASCADE;

-- 1. Направления услуг
INSERT INTO services (id, slug, title, description, image_key, badge) VALUES
(1, 'spa-massage', 'Spa & Massage', 'If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.', 'serviceSpa', 'Popular'),
(2, 'hair-beauty', 'Hair & Beauty', 'If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.', 'serviceHair', 'Trending'),
(3, 'body-treatments', 'Body Treatments', 'If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.', 'serviceBody', 'Recommended');

-- 2. Процедуры прайс-листа
INSERT INTO procedures (id, service_id, category, name, price, formatted_price, duration_minutes, description, is_featured) VALUES
(1, 1, 'Spa & Relax', 'Face masks', 48.00, '$48.00', 45, 'The versions have evolved over the sometimes by accident.', true),
(2, 1, 'Spa & Relax', 'Full body massage', 54.00, '$54.00', 90, 'The versions have evolved over the sometimes by accident.', true),
(3, 1, 'Spa & Relax', 'Geothermal spa', 54.00, '$54.00', 60, 'The versions have evolved over the sometimes by accident.', true),
(4, 1, 'Spa & Relax', 'Sauna relax', 73.00, '$73.00', 60, 'The versions have evolved over the sometimes by accident.', true),
(5, 2, 'Hair & Style', 'Hair styling & Care', 65.00, '$65.00', 60, 'Deep restorative treatment and luxury styling.', false),
(6, 2, 'Hair & Style', 'Color & Highlights', 95.00, '$95.00', 120, 'Premium organic dyes and gentle lightening.', false),
(7, 3, 'Body Care', 'Aroma therapy peeling', 58.00, '$58.00', 50, 'Cleansing Himalayan sea salt and natural botanical oils.', false),
(8, 3, 'Body Care', 'Detox body wrap', 82.00, '$82.00', 75, 'Marine algae and volcanic minerals for deep detoxification.', false);

-- 3. Специалисты
INSERT INTO specialists (id, name, role, description, image_key, experience_years, rating, instagram, facebook, twitter) VALUES
(1, 'Sherlin D''Cruz', 'BEAUTYNESS EXPERT', 'I must explain to you how all this mistaken idea of denouncing pleasure that will arise praising pain.', 'expert1', 8, 5.0, '@sherlin_dcruz', 'facebook.com/sherlin', 'twitter.com/sherlin'),
(2, 'Maria Sharapova', 'BEAUTYNESS EXPERT', 'I must explain to you how all this mistaken idea of denouncing pleasure that will arise praising pain.', 'expert2', 6, 4.9, '@maria_beauty', 'facebook.com/maria', 'twitter.com/maria'),
(3, 'Angeline Jenifer', 'BEAUTYNESS EXPERT', 'I must explain to you how all this mistaken idea of denouncing pleasure that will arise praising pain.', 'expert3', 9, 5.0, '@angeline_jeni', 'facebook.com/angeline', 'twitter.com/angeline');

-- 4. Отзывы
INSERT INTO testimonials (id, name, country, avatar_key, rating, review_text, is_published) VALUES
(1, 'James Williams', 'United States', 'reviewAvatar1', 5, 'It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English', true),
(2, 'Lico Jessica', 'United Kingdom', 'reviewAvatar2', 5, 'It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English', true),
(3, 'Elena Petrova', 'Germany', 'reviewAvatar1', 5, 'Exceptional atmosphere, attentive specialists and fantastic massage treatments. Definitely coming back again!', true);

-- 5. Преимущества
INSERT INTO benefits (id, title_line1, title_line2, description, icon_key, order_index) VALUES
(1, 'Optimised Energy', 'Efficiency', 'The point of using Lorem Ipsum is that using making it look like readable.', 'iconCheckBenefit', 1),
(2, 'Multi-faceted', 'Water Filtration', 'The point of using Lorem Ipsum is that using making it look like readable.', 'iconCheckBenefit', 2),
(3, 'Uncompromising Quality', 'and Durability', 'The point of using Lorem Ipsum is that using making it look like readable.', 'iconCheckBenefit', 3),
(4, 'An Ultra-Pampering Spa', 'Experience', 'The point of using Lorem Ipsum is that using making it look like readable.', 'iconCheckBenefit', 4),
(5, 'Easy Care for Unparalleled', 'Enjoyment', 'The point of using Lorem Ipsum is that using making it look like readable.', 'iconCheckBenefit', 5),
(6, 'Natural Organic', 'Ingredients', 'The point of using Lorem Ipsum is that using making it look like readable.', 'iconCheckBenefit', 6);

-- 6. Блог
INSERT INTO blog_posts (id, slug, title, excerpt, content, author, post_date, image_key) VALUES
(1, 'energy-efficiency-hydrotherapy', 'The energy efficiency of the hydrotherapy or swim', 'The point of using Lorem Ipsum hiter that using making it look like others readable will get end.', 'Hydrotherapy combines temperature and water pressure to promote healing, blood circulation and general well-being...', 'PETER BERGSON', '11TH AUGUST 2021', 'blogUpdate1'),
(2, 'tips-improve-body-cleansing', 'Tips to improve your body via cleansing', 'The point of using Lorem Ipsum hiter that using making it look like others readable will get end.', 'Detoxification is a natural process through which our body eliminates unwanted waste. Explore our tips for healthy rejuvenation...', 'PETER BERGSON', '11TH AUGUST 2021', 'blogUpdate2'),
(3, 'experience-beauty-at-spa', 'Experience the beauty at our beauty spa', 'The point of using Lorem Ipsum hiter that using making it look like others readable will get end.', 'Take time for yourself in an atmosphere of tranquility and premium spa therapies crafted by certified experts...', 'PETER BERGSON', '11TH AUGUST 2021', 'blogUpdate3');

-- 7. Стартовые онлайн-записи (Appointments)
INSERT INTO appointments (id, client_name, email, phone, service_needed, note, status) VALUES
(1, 'Anna Smith', 'anna.smith@example.com', '+1 (555) 234-5678', 'Full body massage', 'Preferred time in the evening after 18:00', 'Подтверждена'),
(2, 'David Miller', 'david.m@example.com', '+1 (555) 876-5432', 'Geothermal spa', 'Please prepare herbal tea', 'Новая'),
(3, 'Sophia Taylor', 'sophia.t@example.com', '+1 (555) 345-6789', 'Face masks', 'First time visit', 'Завершена');

-- 8. Контакты и данные салона
INSERT INTO salon_info (id, salon_name, tagline, email, phone, address, discount_percent, working_hours, social_links) VALUES
(1, 'Beautyness', 'The Beauty is about being Comfortable in your own skin!', 'info@beautyness.com', '(+22) 123 4568 009', '140 Wall St, New York, NY 10005, USA', 50,
'{"weekdays": "9:00 AM - 8:00 PM", "weekends": "10:00 AM - 6:00 PM"}',
'{"facebook": "https://facebook.com", "twitter": "https://twitter.com", "linkedin": "https://linkedin.com", "instagram": "https://instagram.com"}');

-- Синхронизация последовательностей
SELECT setval('services_id_seq', (SELECT MAX(id) FROM services));
SELECT setval('procedures_id_seq', (SELECT MAX(id) FROM procedures));
SELECT setval('specialists_id_seq', (SELECT MAX(id) FROM specialists));
SELECT setval('testimonials_id_seq', (SELECT MAX(id) FROM testimonials));
SELECT setval('benefits_id_seq', (SELECT MAX(id) FROM benefits));
SELECT setval('blog_posts_id_seq', (SELECT MAX(id) FROM blog_posts));
SELECT setval('appointments_id_seq', (SELECT MAX(id) FROM appointments));
SELECT setval('salon_info_id_seq', (SELECT MAX(id) FROM salon_info));
