import { useState, useEffect } from "react";
import "./Sect2.scss";
import { Photo } from "../../../Photo.js";
import { Link } from "react-router-dom";
import { fetchServices } from "../../../api.js";

const DEFAULT_SERVICES = [
    {
        id: 1,
        title: "Spa & Massage",
        desc: "If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.",
        img: Photo.serviceSpa
    },
    {
        id: 2,
        title: "Hair & Beauty",
        desc: "If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.",
        img: Photo.serviceHair
    },
    {
        id: 3,
        title: "Body Treatments",
        desc: "If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.",
        img: Photo.serviceBody
    }
];

export default function Sect2() {
    const [services, setServices] = useState(DEFAULT_SERVICES);

    useEffect(() => {
        fetchServices().then((data) => {
            if (Array.isArray(data) && data.length > 0) {
                const mapped = data.map((item) => ({
                    id: item.id,
                    title: item.title,
                    desc: item.description,
                    img: Photo[item.image_key] || Photo.serviceSpa
                }));
                setServices(mapped);
            }
        }).catch(() => {});
    }, []);

    return (
        <section className="glavSect2">
            <div className="containerWrapper">
                
                <div className="servicesGrid">
                    {services.map((service) => (
                        <div className="serviceCard" key={service.id}>
                            <div className="cardImgWrapper">
                                <img src={service.img} alt={service.title} className="cardImg" />
                            </div>
                            
                            <h3 className="cardTitle">{service.title}</h3>
                            <p className="cardDesc">{service.desc}</p>
                            
                            <Link to="/PageService" className="readMoreBtn" style={{ textDecoration: "none", textAlign: "center" }}>
                                READ MORE
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
