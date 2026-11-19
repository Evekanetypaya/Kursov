import "./Sect1.scss";
import { Photo } from "../../../Photo.js";

export default function Sect1() {
    const valuesList = [
        {
            id: 1,
            icon: Photo.iconExpert,
            title: "Beauty Experts",
            desc: "The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages."
        },
        {
            id: 2,
            icon: Photo.iconService,
            title: "Great Services",
            desc: "The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages."
        },
        {
            id: 3,
            icon: Photo.iconGenuine,
            title: "100% Genuine",
            desc: "The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages."
        }
    ];
    return (
        <section className="aboutSect1">
            
            <div className="heroPart">
                <div className="containerWrapper">
                    <span className="heroSubtitle">SHORT STORY ABOUT US</span>
                    <h1 className="heroTitle">The big story behind, our<br/>beautyness center</h1>
                    <button className="reservationBtn">MAKE A RESERVATION</button>
                </div>
            </div>

            <div className="valuesPart">
                <div className="containerWrapper">
                    
                    <div className="valuesHeader">
                        <span className="valuesSubtitle">OUR VALUES</span>
                        <h2 className="valuesTitle">The work values we thrive for</h2>
                    </div>

                    <div className="valuesList">
                        {valuesList.map((item) => (
                            <div className="valueItem" key={item.id}>
                                <div className="iconWrapper">
                                    <img src={item.icon} alt={item.title} className="valueIcon" />
                                </div>
                                <div className="textCol">
                                    <h3 className="itemTitle">{item.title}</h3>
                                    <p className="itemDesc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
}