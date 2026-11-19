import "./Footer.scss"
import { Link } from "react-router-dom"
import {Photo} from "../../Photo.js"
export default function Footer() {
    const explore = [
        {name: "Home", to: "/"},
        {name: "About Us", to: "/PageAbout"},
        {name: "Services", to: "/PageService"},
        {name: "Appointments", to: "/"},
        {name: "Blog", to: "/PageBlog"},
        {name: "Contact Us", to: "/PageCont"},
    ]
    const utility = ["Start here", "Style guide", "404 not found", "Password protected", "Licenses", "Changelog"]
    const socials = [Photo.social_facebook, Photo.social_twitter, Photo.social_linkedin, Photo.social_instagram]
    return(
        <>
        <footer>
            <div className="footer_main">
                <div className="footer_container">
                    <div className="footer_top">
                        <Link to="/" className="footer_logo">
                            <img className="footer_logo_icon" src={Photo.logo_icon} alt="" />
                            <p className="footer_logo_text">Beautyness</p>
                        </Link>
                        <div className="footer_socials">
                            {socials.map((item, index) => (
                                <div className="social_box" key={index}>
                                    <img className="social_img" src={item} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="footer_line"></div>
                    <div className="footer_cols">
                        <div className="col_explore">
                            <p className="col_title">Explore</p>
                            {explore.map((item, index) => (
                                <Link to={item.to} key={index}><p className="col_link">{item.name}</p></Link>
                            ))}
                        </div>
                        <div className="col_utility">
                            <p className="col_title">Utility Pages</p>
                            {utility.map((item, index) => (
                                <p className="col_link" key={index}>{item}</p>
                            ))}
                        </div>
                        <div className="col_touch">
                            <p className="col_title">Keep in Touch</p>
                            <div className="touch_row touch_address">
                                <p className="touch_label">Address :</p>
                                <p className="touch_value">24A Kingston St, Los Vegas<br />NC 28202, USA.</p>
                            </div>
                            <div className="touch_row">
                                <p className="touch_label">Mail :</p>
                                <p className="touch_value">support@doctors.com</p>
                            </div>
                            <div className="touch_row">
                                <p className="touch_label">Phone :</p>
                                <p className="touch_value">(+22) 123 - 4567 - 900</p>
                            </div>
                        </div>
                        <div className="col_hours">
                            <p className="col_title">Working Hours</p>
                            <p className="col_link">Mon to Fri: 7am - 6pm</p>
                            <p className="col_link">Sat: 9am - 7pm</p>
                            <p className="col_link">Sun: 9am - 6pm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <p className="footer_copy">© Copyright 2021. Drafted by Victor Themes.</p>
            </div>
        </footer>
        </>
    )
}