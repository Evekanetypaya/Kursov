import { useState } from "react";
import "./Sect2.scss";
import { Photo } from "../../../Photo.js";
import { createAppointment } from "../../../api.js";

export default function Sect2() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        note: ""
    });
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone) {
            setMessage({ type: "error", text: "Пожалуйста, заполните имя, email и телефон." });
            return;
        }

        setSubmitting(true);
        setMessage(null);

        try {
            const res = await createAppointment(formData);
            setMessage({
                type: "success",
                text: `✓ Заявка #${res.appointment?.id || ""} успешно оформлена и сохранена в базу данных!`
            });
            setFormData({ name: "", email: "", phone: "", service: "", note: "" });
        } catch (err) {
            setMessage({
                type: "error",
                text: err.message || "Ошибка отправки формы. Проверьте запущен ли Docker контейнер."
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="contactSect2">
            <div className="containerWrapper">
                <div className="headerBlock">
                    <span className="sectionSubtitle">SCHEDULE YOUR PRESENCE</span>
                    <h2 className="sectionTitle">Make an Appointment</h2>
                    <p className="sectionDesc">
                        There are many variations of passages of Lorem Ipsum available, but the<br/>
                        majority have suffered alteration in some form.
                    </p>
                </div>
                <div className="formCard">
                    {message && (
                        <div style={{
                            padding: "12px 16px",
                            borderRadius: "8px",
                            marginBottom: "15px",
                            fontSize: "14px",
                            backgroundColor: message.type === "success" ? "#dcfce7" : "#fee2e2",
                            color: message.type === "success" ? "#166534" : "#991b1b",
                            border: `1px solid ${message.type === "success" ? "#86efac" : "#fca5a5"}`
                        }}>
                            {message.text}
                        </div>
                    )}

                    <form className="appointmentForm" onSubmit={handleSubmit}>
                        <div className="inputGroup">
                            <img src={Photo.iconUser} alt="Name" className="inputIcon" />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="formInput"
                                required
                            />
                        </div>
                        <div className="inputGroup">
                            <img src={Photo.iconMail} alt="Email" className="inputIcon" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="formInput"
                                required
                            />
                        </div>
                        <div className="inputGroup">
                            <img src={Photo.iconPhone} alt="Phone" className="inputIcon" />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone"
                                className="formInput"
                                required
                            />
                        </div>
                        <div className="inputGroup">
                            <img src={Photo.iconBook} alt="Service" className="inputIcon" />
                            <input
                                type="text"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                placeholder="Service You Need"
                                className="formInput"
                            />
                        </div>
                        <div className="inputGroup textareaGroup">
                            <img src={Photo.iconEdit} alt="Note" className="inputIcon" />
                            <textarea
                                name="note"
                                value={formData.note}
                                onChange={handleChange}
                                placeholder="Any Note For Us"
                                className="formTextarea"
                            ></textarea>
                        </div>
                        <button type="submit" className="submitBtn" disabled={submitting}>
                            {submitting ? "SENDING..." : "MAKE AN APPOINTMENT"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
