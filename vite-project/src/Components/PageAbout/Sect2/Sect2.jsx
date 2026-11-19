import "./Sect2.scss";
import { Photo } from "../../../Photo.js";

export default function Sect2() {
    return (
        <section className="aboutSect2">
            <div className="containerWrapper">
                
                <div className="darkCard">
                    <div className="imageWrapper">
                        <img src={Photo.aboutStyleImg} alt="Style Reflection" className="cardImg" />
                    </div>
                    
                    <div className="textWrapper">
                        <span className="sectionSubtitle">ABOUT US</span>
                        <h2 className="sectionTitle">
                            Style is a Reflection of<br/>
                            your Attitude & your<br/>
                            Personality
                        </h2>
                        <p className="sectionDesc">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words which don't look even many desktop publishing packages.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}