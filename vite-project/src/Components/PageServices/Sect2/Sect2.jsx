import "./Sect2.scss";

export default function Sect2() {
    return (
        <section className="servicesSect2">
            <div className="containerWrapper">
                <div className="textContent">
                    <span className="subtitle">FLAT DISCOUNT</span>
                    <h2 className="mainTitle">Claim upto 50% offer<br />on the most popular services...</h2>
                    <p className="desc">Our Retreat is not meant to be an occasional treat, but rather a part of your<br />routine that restores balance to your daily life. </p>
                </div>
                <div className="offerCard">
                    <div className="contactBox">
                        <div className="contactRow">
                            <span className="dots">•••</span>
                            <div className="textCol">
                                <span className="label">MAIL US :</span>
                                <span className="value">info@beautyness.com</span>
                            </div>
                        </div>
                        <div className="contactRow">
                            <span className="dots">•••</span>
                            <div className="textCol">
                                <span className="label">CALL US :</span>
                                <span className="value">(+22) 123 4568 009</span>
                            </div>
                        </div>
                    </div>
                    <div className="discountBox">
                        <span className="discountTop">- GET FLAT -</span>
                        <span className="discountValue">50%</span>
                        <span className="discountBottom">Discount</span>
                    </div>
                </div>
            </div>
        </section>
    );
}