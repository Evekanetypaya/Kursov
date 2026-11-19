import { useState, useEffect } from "react";
import "./Sect3.scss";
import { Photo } from "../../../Photo.js";
import { fetchSpecialists } from "../../../api.js";

const DEFAULT_EXPERTS = [
    {
        id: 1,
        name: "Sherlin D'Cruz",
        role: "BEAUTYNESS EXPERT",
        desc: "I must explain to you how all this mistaken idea of denouncing pleasure that will arise praising pain",
        img: Photo.expert1
    },
    {
        id: 2,
        name: "Maria Sharapova",
        role: "BEAUTYNESS EXPERT",
        desc: "I must explain to you how all this mistaken idea of denouncing pleasure that will arise praising pain",
        img: Photo.expert2
    },
    {
        id: 3,
        name: "Angeline Jenifer",
        role: "BEAUTYNESS EXPERT",
        desc: "I must explain to you how all this mistaken idea of denouncing pleasure that will arise praising pain",
        img: Photo.expert3
    }
];

export default function Sect3() {
    const [experts, setExperts] = useState(DEFAULT_EXPERTS);

    useEffect(() => {
        fetchSpecialists().then((data) => {
            if (Array.isArray(data) && data.length > 0) {
                const mapped = data.map((exp) => ({
                    id: exp.id,
                    name: exp.name,
                    role: exp.role,
                    desc: exp.description,
                    img: Photo[exp.image_key] || Photo.expert1
                }));
                setExperts(mapped);
            }
        }).catch(() => {});
    }, []);

    return (
        <section className="aboutSect3">
            <div className="containerWrapper">
                
                <div className="headerBlock">
                    <span className="sectionSubtitle">MEET OUR EXPERTS</span>
                    <h2 className="sectionTitle">
                        The amazing women behind<br/>
                        Beautyness
                    </h2>
                </div>

                <div className="expertsGrid">
                    {experts.map((expert) => (
                        <div className="expertCard" key={expert.id}>
                            <img src={expert.img} alt={expert.name} className="expertImg" />
                            
                            <div className="expertInfo">
                                <h3 className="expertName">{expert.name}</h3>
                                <span className="expertRole">{expert.role}</span>
                                <p className="expertDesc">{expert.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
