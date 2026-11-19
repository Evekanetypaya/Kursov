import "./Sect6.scss";
import { Photo } from "../../../Photo.js";

export default function Sect6() {
    const benefits = [
        { id: 1, lines: ["Optimised Energy", "Efficiency"] },
        { id: 2, lines: ["Multi-faceted", "Water Filtration"] },
        { id: 3, lines: ["Uncompromising Quality", "and Durability"] },
        { id: 4, lines: ["An Ultra-Pampering Spa", "Experience"] },
        { id: 5, lines: ["Easy Care for Unparalleled", "Enjoyment"] },
        { id: 6, lines: ["Optimised Energy", "Efficiency"] }
    ];

    return (
        <section className="glavSect6">
            <div className="containerWrapper">
                <div className="headerBlock">
                    <span className="subtitle">OUR AWESOME BENEFITS</span>
                    <h2 className="mainTitle">Actually what you’ll get from</h2>
                </div>

                <div className="benefitsGrid">
                    {benefits.map((item) => (
                        <div className="benefitItem" key={item.id}>
                            <div className="iconFrame">
                                <div className="iconSquare">
                                    <img src={Photo.iconCheckBenefit} alt="" className="checkIcon" />
                                </div>
                            </div>
                            <h3 className="benefitTitle">
                                {item.lines[0]}<br />{item.lines[1]}
                            </h3>
                            <p className="benefitText">
                                The point of using Lorem Ipsum is that using making it look like readable.
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}