import "./Sect1.scss";
import { Photo } from "../../../Photo.js";

export default function Sect1() {
    const priceList = [
        { id: 1, name: "Face masks", price: "$48.00", desc: "The versions have evolved over the sometimes by accident." },
        { id: 2, name: "Full body massage", price: "$54.00", desc: "The versions have evolved over the sometimes by accident." },
        { id: 3, name: "Geothermal spa", price: "$54.00", desc: "The versions have evolved over the sometimes by accident." },
        { id: 4, name: "Sauna relax", price: "$73.00", desc: "The versions have evolved over the sometimes by accident." }
    ];

    const rows = [
        { id: 1, image: Photo.servicePricesImg1, alt: "Mask treatment" },
        { id: 2, image: Photo.servicePricesImg2, alt: "Facial treatment" },
        { id: 3, image: Photo.servicePricesImg3, alt: "Hair styling" },
        { id: 4, image: Photo.servicePricesImg4, alt: "Stone massage" },
        { id: 5, image: Photo.servicePricesImg5, alt: "Body massage" }
    ];

    const renderTextCard = (rowId) => (
        <div className="serviceTextCard">
            <div className="priceList">
                {priceList.map((service) => (
                    <div className="priceItem" key={`${rowId}-${service.id}`}>
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
            <button className="appointmentBtn">GET AN APPOINTMENT</button>
        </div>
    );

    return (
        <section className="servicesSect1">
            <div className="containerWrapper">

                <div className="headerBlock">
                    <span className="subtitle">OUR SERVICES</span>
                    <h2 className="mainTitle">
                        We are Experienced in making<br />
                        you very Beautiful
                    </h2>
                </div>

                <div className="rowsWrapper">
                    {rows.map((row, index) => {
                        const photoLeft = index % 2 === 0;
                        return (
                            <div className={photoLeft ? "serviceRow rowPhotoLeft" : "serviceRow rowPhotoRight"} key={row.id}>
                                {photoLeft ? (
                                    <>
                                        <div className="imageItem">
                                            <img src={row.image} alt={row.alt} className="serviceImg" />
                                        </div>
                                        <div className="textItem">{renderTextCard(row.id)}</div>
                                    </>
                                ) : (
                                    <>
                                        <div className="textItem">{renderTextCard(row.id)}</div>
                                        <div className="imageItem">
                                            <img src={row.image} alt={row.alt} className="serviceImg" />
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}