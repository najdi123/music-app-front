import React from 'react';
import './CarouselTop.css'

import pic1 from '../images/img (31).jpg'
import pic2 from '../images/img (33).jpg'
import pic3 from '../images/img (35).jpg'
import pic4 from '../images/oliver tree - movement.png'
import ReactPlayer from "react-player";

const data = [
    {image: pic1, songName: "Im fly", singer: "Ali"},
    {image: pic2, songName: "Im cold", singer: "Moniii"},
    {image: pic3, songName: "Im hot", singer: "Mohi"},
    // {image: pic4, songName: "Movement", singer: "Oliver Tree"}
    ];

const indicator = (i) => {
    if (i === 0) {
        return "active"
    } else {
        return ""
    }
};

const imageItem = (i) => {
    if (i === 0) {
        return "carousel-item active"
    } else {
        return "carousel-item"
    }
};

const CarouselTop = () => {

    return (
        <div>
            <div id="topCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {data.map((item, i) =>
                        <li key={i} data-target="#topCarousel" data-slide-to={i} className={indicator(i)}></li>
                    )}
                </ol>
                <div className="carousel-inner">
                    {data.map((item, i) =>
                        <div key={i} className={imageItem(i)}>
                            <img src={item.image} className="d-block w-100" alt="..."/>

                            {/* carousel caption for screen sizes larger than sm */}
                            <div className="carousel-caption d-none d-sm-block">

                                <h5 className=" text-bg">{item.songName}</h5>
                                <br/>
                                <p className=" text-bg">{item.singer + " "}از </p>

                            </div>
                            {/* carousel caption for screen sizes of sm and xs */}
                            <div className="carousel-caption-small text-center d-block d-sm-none">
                                <h5>{item.songName}</h5>
                                <p>{item.singer + " "}از </p>
                            </div>
                        </div>
                    )}


                </div>
                <a className="carousel-control-prev" href="#topCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#topCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default CarouselTop;