import React, {useEffect, useState} from 'react';
import '../NewMultiItemCarousel/NewMultiItemCarousel.css'

import '../NewMultiItemCarousel/NewMultiItemCarousel.css'
import {Link} from "react-router-dom";

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const NewMultiItemCarousel = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/api/showSongsBySinger/singer?singer=Oliver Tree')
            .then(res => res.json())
            .then(data => (setData(data.reverse())))
            .catch(err => console.log(err))

    }, [])

    var vh;
    var imageHeight = window.innerHeight;
    vh = imageHeight / 4  + 'px';


    return (
        <Carousel
            // className="pt-4"
            arrows
            slidesPerPage={6}
            slidesPerScroll={1}
            infinite
            keepDirectionWhenDragging
            breakpoints={{
                // smaller than
                1200: {
                    slidesPerPage: 5,
                    // arrows: false,
                },
                1024: {
                    slidesPerPage: 4,
                    // arrows: false,
                },
                770: {
                    slidesPerPage: 3,
                    arrows: false,
                    infinite: false
                },
                500: {
                    slidesPerPage: 2,
                    arrows: false,
                    // centered: true
                    infinite: false
                }

            }}
        >

            {data.map((item, i) =>
                <div key={i} >
                    <img src={"http://localhost:5000/"+item.imageURL} alt={item.songName} style={{height: vh, width: vh}} className="songImage"/>
                    <div className=" text-center d-block">
                        <h5>{item.songName}</h5>
                        <p>{item.singer}</p>
                    </div>
                </div>
            )}

        </Carousel>
    );
}

export default NewMultiItemCarousel;