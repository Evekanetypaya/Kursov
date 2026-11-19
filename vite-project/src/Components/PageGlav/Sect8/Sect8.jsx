import "./Sect8.scss";
import { Photo } from "../../../Photo.js";
import { Link } from "react-router-dom"

export default function Sect8() {
    const blogPosts = [
        {
            id: 1,
            img: Photo.blogUpdate1,
            date: "11TH AUGUST 2021",
            author: "PETER BERGSON",
            title: "The energy efficiency of the hydrotherapy or swim",
            desc: "The point of using Lorem Ipsum hiter that using making it look like others readable will get end."
        },
        {
            id: 2,
            img: Photo.blogUpdate2,
            date: "11TH AUGUST 2021",
            author: "PETER BERGSON",
            title: "Tips to improve your body via cleansing",
            desc: "The point of using Lorem Ipsum hiter that using making it look like others readable will get end."
        },
        {
            id: 3,
            img: Photo.blogUpdate3,
            date: "11TH AUGUST 2021",
            author: "PETER BERGSON",
            title: "Experience the beauty at our beauty spa",
            desc: "The point of using Lorem Ipsum hiter that using making it look like others readable will get end."
        }
    ];

    return (
        <section className="glavSect8">
            <div className="containerWrapper">
                <div className="headerBlock">
                    <span className="subtitle">OUR BLOG</span>
                    <h2 className="mainTitle">Latest Updates</h2>
                </div>
                <div className="blogGrid">
                    {blogPosts.map((post) => (
                        <div className="blogCard" key={post.id}>
                            <img src={post.img} alt={post.title} className="cardImg" />
                            <div className="cardContent">
                                <span className="cardMeta">
                                    {post.date} &mdash; BY {post.author}
                                </span>
                                <h3 className="cardTitle">{post.title}</h3>
                                <p className="cardDesc">{post.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to="/PageBlog"><button className="viewMoreBtn">VIEW MORE STORIES</button></Link>
            </div>
        </section>
    );
}