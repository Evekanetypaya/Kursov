import { useState, useEffect } from "react";
import "./Sect4.scss";
import { Photo } from "../../../Photo.js";
import { fetchProcedures } from "../../../api.js";

const DEFAULT_SERVICES = [
    { id: 1, name: "Face masks", price: "$48.00", desc: "The versions have evolved over the sometimes by accident." },
    { id: 2, name: "Full body massage", price: "$54.00", desc: "The versions have evolved over the sometimes by accident." },
    { id: 3, name: "Geothermal spa", price: "$54.00", desc: "The versions have evolved over the sometimes by accident." },
    { id: 4, name: "Sauna relax", price: "$73.00", desc: "The versions have evolved over the sometimes by accident." }
];

export default function Sect4() {
    const [servicesList, setServicesList] = useState(DEFAULT_SERVICES);

    useEffect(() => {
        fetchProcedures().then((data) => {
            if (Array.isArray(data) && data.length > 0) {
                const mapped = data.slice(0, 4).map((p) => ({
                    id: p.id,
                    name: p.name,
                    price: p.formatted_price || `$${Number(p.price).toFixed(2)}`,
                    desc: p.description
                }));
                setServicesList(mapped);
            }
        }).catch(() => {});
    }, []);

    const renderTextCard = (keyPrefix) => (
        <div className="serviceTextCard">
            <div className="priceList">
                {servicesList.map((service) => (
                    <div className="priceItem" key={`${keyPrefix}-${service.id}`}>
                        <div className="priceRowTop">
                            <span className="serviceName">{service.name}</span>
                            <div className="dots"></div>
                            <span className="priceFrom">from</span>
                            <span className="servicePrice">{service.price}</span>
                        </div>
                        <p className="priceDesc">{service.desc}</p>
                    </div>
                ))}
            </div>
            <button className="appointmentBtn" onClick={() => {
                const formEl = document.querySelector(".formCard") || document.querySelector(".appointmentForm");
                if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
            }}>GET AN APPOINTMENT</button>
        </div>
    );

    return (
        <section className="glavSect4">
            <div className="containerWrapper">

                <div className="headerBlock">
                    <span className="subtitle">OUR SERVICES</span>
                    <h2 className="mainTitle">
                        We are Experienced in making<br />
                        you very Beautiful
                    </h2>
                </div>

                <div className="contentWrapper">
                    <div className="decorativeSquare"></div>

                    <div className="gridRow rowTop">
                        <div className="imageItem">
                            <img src={Photo.servicePricesImg1} alt="Mask treatment" className="serviceImg" />
                        </div>
                        <div className="textItem textTop">
                            {renderTextCard("top")}
                        </div>
                    </div>

                    <div className="gridRow rowBottom">
                        <div className="textItem textBottom">
                            {renderTextCard("bottom")}
                        </div>
                        <div className="imageItem">
                            <img src={Photo.servicePricesImg2} alt="Facial treatment" className="serviceImg" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
