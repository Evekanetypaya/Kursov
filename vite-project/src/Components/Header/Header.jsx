import "../Header/Header.scss"
import { Link } from "react-router-dom"
import {Photo} from "../../Photo.js"
export default function Header() {
    return(
        <>
            <header>
                <div className="header_container">
                    <div className="header_left">
                        <Link to="/" className="header_logo">
                            <img className="logo_icon" src={Photo.logo_icon} alt="" />
                            <p className="logo_text">Beautyness</p>
                        </Link>
                        <div className="header_call">
                            <img className="call_icon" src={Photo.phone} alt="" />
                            <p className="call_text">Call Us - (+22) 123 456 7890</p>
                        </div>
                    </div>
                    <div className="header_right">
                        <nav className="header_nav">
                            <Link to="/"><p className="text_nav">Home</p></Link>
                            <div className="nav_pages">
                                <p className="text_nav">Pages</p>
                                <img className="nav_chevron" src={Photo.chevron} alt="" />
                            </div>
                            <Link to="/PageAbout"><p className="text_nav">About</p></Link>
                            <Link to="/PageService"><p className="text_nav">Services</p></Link>
                            <Link to="/PageCont"><p className="text_nav">Contact</p></Link>
                        </nav>
                        <div className="header_socials">
                            <img className="social_icon" src={Photo.facebook} alt="" />
                            <img className="social_icon" src={Photo.twitter} alt="" />
                            <img className="social_icon" src={Photo.linkedin} alt="" />
                        </div>
                        <Link to="/PageCont"><button className="btn_reserv">
                            <img className="reserv_icon" src={Photo.calendar} alt="" />
                            RESERVATION
                        </button></Link>
                    </div>
                </div>
            </header>
        </>
    )
}