import "./Sect1.scss";
import { Photo } from "../../../Photo.js";

export default function Sect1() {
    return (
        <section className="contactSect1">
            <div className="heroPart">
                <div className="containerWrapper">
                    <span className="heroSubtitle">GET IN TOUCH WITH US</span>
                    <h1 className="heroTitle">
                        We Are Ready To Assist<br/>
                        You In 24x7
                    </h1>
                </div>
            </div>
            <div className="infoPart">
                <div className="containerWrapper">
                    
                    <div className="contentGrid">
                        <div className="imageCol">
                            <div className="decorativeSquare"></div>
                            <img src={Photo.contactStoreImg} alt="Store Interior" className="storeImg" />
                        </div>
                        <div className="textCol">
                            <span className="sectionSubtitle">GET IN TOUCH!</span>
                            <h2 className="sectionTitle">
                                We are here to help<br/>
                                you always...
                            </h2>
                            <p className="sectionDesc">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to many desktop publishing packages.
                            </p>

                            <div className="contactList">
                                
                                <div className="contactItem">
                                    <div className="iconBox">
                                        <img src={Photo.iconVisit} alt="Visit Us" className="itemIcon" />
                                    </div>
                                    <div className="itemText">
                                        <span className="itemLabel">Visit Us :</span>
                                        <span className="itemValue">NO.09A, DOWNTOWN, SAN DIEAGO, USA</span>
                                    </div>
                                </div>

                                <div className="contactItem">
                                    <div className="iconBox">
                                        <img src={Photo.iconDrop} alt="Drop Us" className="itemIcon" />
                                    </div>
                                    <div className="itemText">
                                        <span className="itemLabel">Drop Us :</span>
                                        <span className="itemValue">SUPPORT@BEAUTYNESS.COM</span>
                                    </div>
                                </div>
                                <div className="contactItem">
                                    <div className="iconBox">
                                        <img src={Photo.iconCall} alt="Call Us" className="itemIcon" />
                                    </div>
                                    <div className="itemText">
                                        <span className="itemLabel">Call Us :</span>
                                        <span className="itemValue">CALL: 1-800-123-9999</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}