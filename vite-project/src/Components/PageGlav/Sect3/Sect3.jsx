import "./Sect3.scss";
import { Photo } from "../../../Photo.js";

export default function Sect3() {
    return (
        <section className="glavSect3">
            <div className="containerWrapper">
                <div className="textContent">
                    <span className="subtitle">ABOUT US</span>
                    <h2 className="mainTitle">
                        The Beauty is about<br/>
                        being Comfortable<br/>
                        in your own skin!
                    </h2>
                    <p className="descriptionText">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words which don't look even many desktop publishing packages.
                    </p>
                    
                    <div className="featuresRow">
                        <div className="featureBox">
                            <img src={Photo.iconExpert} alt="Beauty Experts" className="featureIcon" />
                            <span className="featureText">Beauty<br/>Experts</span>
                        </div>
                        <div className="featureBox">
                            <img src={Photo.iconService} alt="Great Services" className="featureIcon" />
                            <span className="featureText">Great<br/>Services</span>
                        </div>
                        <div className="featureBox">
                            <img src={Photo.iconGenuine} alt="100% Genuine" className="featureIcon" />
                            <span className="featureText">100%<br/>Genuine</span>
                        </div>
                    </div>
                </div>
                <div className="imageContent">
                    <div className="imageWrapper">
                        <div className="decorativeBg"></div>
                        <img src={Photo.aboutImg} alt="About Us" className="mainImg" />
                    </div>
                </div>
            </div>
        </section>
    );
}