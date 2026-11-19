import "./Sect1.scss";
import { Photo } from "../../../Photo.js";

export default function Sect1() {
    const articles = [
        {
            id: 1,
            date: "11TH AUGUST 2021",
            author: "BY PETER BERGSON",
            title: "The energy efficiency of the hydrotherapy or swim",
            desc: "The point of using Lorem Ipsum hiter that using making it look like others readable will get end.",
            img: Photo.blogImg1
        },
        {
            id: 2,
            date: "11TH AUGUST 2021",
            author: "BY PETER BERGSON",
            title: "Tips to improve your body via cleansing",
            desc: "The point of using Lorem Ipsum hiter that using making it look like others readable will get end.",
            img: Photo.blogImg2
        },
        {
            id: 3,
            date: "11TH AUGUST 2021",
            author: "BY PETER BERGSON",
            title: "Experience the beauty at our beauty spa",
            desc: "The point of using Lorem Ipsum hiter that using making it look like others readable will get end.",
            img: Photo.blogImg3
        },
        {
            id: 4,
            date: "11TH AUGUST 2021",
            author: "BY PETER BERGSON",
            title: "The best and perfect skincare strategy",
            desc: "The point of using Lorem Ipsum hiter that using making it look like others readable will get end.",
            img: Photo.blogImg4
        },
        {
            id: 5,
            date: "11TH AUGUST 2021",
            author: "BY PETER BERGSON",
            title: "Fell the natural reverse aging process",
            desc: "The point of using Lorem Ipsum hiter that using making it look like others readable will get end.",
            img: Photo.blogImg5
        },
        {
            id: 6,
            date: "11TH AUGUST 2021",
            author: "BY PETER BERGSON",
            title: "How to make the make-up stay last",
            desc: "The point of using Lorem Ipsum hiter that using making it look like others readable will get end.",
            img: Photo.blogImg6
        }
    ];

    return (
        <section className="blogSect1">
            <div className="heroPart">
                <div className="containerWrapper">
                    <span className="heroSubtitle">GET IN TOUCH WITH US</span>
                    <h1 className="heroTitle">Articles & News</h1>
                </div>
            </div>

            <div className="articlesPart">
                <div className="containerWrapper">
                    <div className="blogGrid">
                        {articles.map((item) => (
                            <article className="blogCard" key={item.id}>
                                <img src={item.img} alt={item.title} className="cardImg" />
                                <div className="cardContent">
                                    <div className="cardMeta">
                                        <span>{item.date}</span>
                                        <span className="metaLine"></span>
                                        <span>{item.author}</span>
                                    </div>
                                    <h3 className="cardTitle">{item.title}</h3>
                                    <p className="cardDesc">{item.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <button type="button" className="viewMoreBtn">VIEW MORE STORIES</button>
                </div>
            </div>
        </section>
    );
}