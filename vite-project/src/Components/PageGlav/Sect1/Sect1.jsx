import "./Sect1.scss"
import { Link } from "react-router-dom"
import {Photo} from "../../../Photo.js"
export default function Sect1() {
    return(
        <>
        <section className="bt_hero">
            <div className="bt_hero_left"></div>
            <div className="bt_hero_right">
                <img className="bt_hero_bg" src={Photo.hero_bg} alt="" />
            </div>
            <div className="bt_hero_frame"></div>
            <img className="bt_hero_photo" src={Photo.hero_photo} alt="" />

            <div className="bt_hero_info">
                <div className="bt_hero_badge">
                    <img className="bt_badge_icon" src={Photo.icon_badge} alt="" />
                    <p className="bt_badge_text">WELCOME TO BEAUTYNESS!!!</p>
                </div>
                <h1 className="bt_hero_title">Beauty is power<br />a smile is its<br />sword.</h1>
                <p className="bt_hero_desc">There are many variation of passages are Ipsum available, majority have suffered alteration in some form.</p>
                <Link to="/PageCont"><button className="bt_hero_btn">MAKE A RESERVATION</button></Link>
            </div>
        </section>
        </>
    )
}