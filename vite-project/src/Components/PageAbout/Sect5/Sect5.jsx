import "./Sect5.scss";
import { Photo } from "../../../Photo.js";
import { Link } from "react-router-dom"

export default function Sect5() {
    return (
        <section className="aboutSect5">
            <div className="containerWrapper">
                
                <div className="contentGrid">
                    <div className="leftCol">
                        <div className="textContent">
                            <span className="sectionSubtitle">SHARE US</span>
                            <h2 className="sectionTitle">
                                Follow us on<br/>
                                Instagram
                            </h2>
                            <p className="sectionDesc">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words many desktop publishing packages.
                            </p>
                        </div>
                        <img src={Photo.instaImg1} alt="Spa setup" className="instaImgTall" />
                    </div>
                    <div className="rightCol">
                        <img src={Photo.instaImg2} alt="Massage room" className="instaImgSmall" />
                        <img src={Photo.instaImg3} alt="Hot stone massage" className="instaImgSmall" />
                    </div>
                </div>
                <Link to="/PageCont"><button className="contactBtn">CONTACT US</button></Link>
            </div>
        </section>
    );
}