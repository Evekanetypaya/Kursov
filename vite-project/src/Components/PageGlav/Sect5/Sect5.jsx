import { useState, useEffect } from "react";
import "./Sect5.scss";
import { Photo } from "../../../Photo.js";
import { fetchTestimonials } from "../../../api.js";

const DEFAULT_REVIEWS = [
    {
        id: 1,
        name: "James Williams",
        country: "United States",
        avatar: Photo.reviewAvatar1,
        text: "It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English"
    },
    {
        id: 2,
        name: "Lico Jessica",
        country: "United Kingdom",
        avatar: Photo.reviewAvatar2,
        text: "It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English"
    }
];

export default function Sect5() {
    const [reviews, setReviews] = useState(DEFAULT_REVIEWS);

    useEffect(() => {
        fetchTestimonials().then((data) => {
            if (Array.isArray(data) && data.length > 0) {
                const mapped = data.map((item) => ({
                    id: item.id,
                    name: item.name,
                    country: item.country,
                    avatar: Photo[item.avatar_key] || Photo.reviewAvatar1,
                    text: item.review_text
                }));
                setReviews(mapped);
            }
        }).catch(() => {});
    }, []);

    return (
        <section className="glavSect5">
            <div className="containerWrapper">

                <div className="headerBlock">
                    <span className="subtitle">TESTIMONIALS</span>
                    <h2 className="mainTitle">What our Customers says...</h2>
                </div>

                <div className="reviewsRow">
                    {reviews.map((item) => (
                        <div className="reviewCard" key={item.id}>
                            <p className="reviewText">
                                "{item.text}"
                            </p>
                            <div className="reviewFooter">
                                <div className="authorBlock">
                                    <img src={item.avatar} alt={item.name} className="authorAvatar" />
                                    <div className="authorInfo">
                                        <img src={Photo.starsWhite} alt="" className="authorStars" />
                                        <span className="authorName">{item.name}</span>
                                        <span className="authorCountry">{item.country}</span>
                                    </div>
                                </div>
                                <img src={Photo.quoteWhite} alt="" className="quoteIcon" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
