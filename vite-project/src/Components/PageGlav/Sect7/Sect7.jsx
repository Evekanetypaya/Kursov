import { useState } from "react";
import "./Sect7.scss";
import { Photo } from "../../../Photo.js";
import { createAppointment } from "../../../api.js";

export default function Sect7() {
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
        <section className="glavSect7">
            <div className="containerWrapper">
                <div className="infoBlock">
                    <span className="subtitle">FLAT DISCOUNT</span>
                    <h2 className="mainTitle">
                        Claim upto 50% off er<br />
                        on the most popular<br />
                        services...
                    </h2>
                    <p className="infoText">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words.
                    </p>

                    <div className="contactBox">
                        <div className="contactList">
                            <div className="contactItem">
                                <img src={Photo.dotsTeal} alt="" className="contactDots" />
                                <div className="contactText">
                                    <span className="contactLabel">MAIL US :</span>
                                    <span className="contactValue">info@beautyness.com</span>
                                </div>
                            </div>
                            <div className="contactItem">
                                <img src={Photo.dotsTeal} alt="" className="contactDots" />
                                <div className="contactText">
                                    <span className="contactLabel">CALL US :</span>
                                    <span className="contactValue">(+22) 123 4568 009</span>
                                </div>
                            </div>
                        </div>
                        <div className="discountBox">
                            <span className="discountTop">- GET FLAT -</span>
                            <span className="discountNum">50<small>%</small></span>
                            <span className="discountBottom">Discount</span>
                        </div>
                    </div>
                </div>

                <form className="formCard" onSubmit={handleSubmit}>
                    {message && (
                        <div style={{
                            padding: "12px 16px",
                            borderRadius: "8px",
                            marginBottom: "15px",
                            fontSize: "14px",
                            backgroundColor: message.type === "success" ? "#dcfce7" : "#fee2e2",
                            color: message.type === "success" ? "#166534" : "#991b1b",
                            border: `1px solid ${message.type === "success" ? "#86efac" : "#fca5a5"}`,
                            gridColumn: "1 / -1"
                        }}>
                            {message.text}
                        </div>
                    )}

                    <div className="fieldWrap">
                        <img src={Photo.iconUser} alt="" className="fieldIcon" />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="fieldInput"
                            required
                        />
                    </div>

                    <div className="fieldWrap">
                        <img src={Photo.iconMail} alt="" className="fieldIcon" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="fieldInput"
                            required
                        />
                    </div>

                    <div className="fieldWrap">
                        <img src={Photo.iconPhone} alt="" className="fieldIcon" />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className="fieldInput"
                            required
                        />
                    </div>

                    <div className="fieldWrap">
                        <img src={Photo.iconBook} alt="" className="fieldIcon" />
                        <input
                            type="text"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            placeholder="Service You Need"
                            className="fieldInput"
                        />
                    </div>

                    <div className="fieldWrap fieldArea">
                        <img src={Photo.iconEdit} alt="" className="fieldIcon" />
                        <textarea
                            name="note"
                            value={formData.note}
                            onChange={handleChange}
                            placeholder="Any Note For Us"
                            className="fieldTextarea"
                        ></textarea>
                    </div>

                    <button type="submit" className="submitBtn" disabled={submitting}>
                        {submitting ? "SENDING..." : "GET AN APPOINTMENT"}
                    </button>
                </form>
            </div>
        </section>
    );
}
