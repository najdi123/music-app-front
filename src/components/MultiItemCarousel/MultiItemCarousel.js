import React from 'react';
import './MultiItemCarousel.css'

import { Link } from "react-router-dom";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import pic1 from '../images/multiCarousel/c1.jpg'
import pic2 from '../images/multiCarousel/c2.jpg'
import pic3 from '../images/multiCarousel/c3.jpg'
import pic4 from '../images/multiCarousel/c4.jpg'
import pic5 from '../images/multiCarousel/c5.jpg'
import pic6 from '../images/multiCarousel/c6.jpg'
import loggedReducer from "../../reducers/isSigned";


const MultiItemCarousel = () => {
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 6,
            slidesToSlide: 1, // optional, default to 1.
        },
        // based on the number of items shown in tablet a range of screen sizes dont loook good
        // at 3 items from 780 to 1024 @vw
        // at 4 items from 464 to 630
        // also depends on width and height of image
        // at 3 items vw from 464 to 550
        tablet: {
            breakpoint: {max: 1024, min: 700},
            items: 4,
            slidesToSlide: 1, // optional, default to 1.
        },
        sTablet: {
            breakpoint: {max: 700, min: 464},
            items: 3,
            slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
        },


    };
    let vw = '30vw';
    const viewWidth = () => {
        if (window.innerWidth < 464) {
            vw = '50vw'

        } else if (window.innerWidth < 700) {
            vw = '33vw'

        }else if (window.innerWidth < 1024 ) {
            vw = '25vw'


        }
        else if (window.innerWidth >= 1024) {
            vw = '16vw'

        }

        console.log(vw)
    };
    var vh;
    var imageHeight = window.innerHeight;
    // vh = imageHeight / 4 - (imageHeight / 100) + 'px';
    vh = imageHeight / 4  + 'px';

    // const ButtonGroup = ({ next, previous, goToSlide }) => {
    //     const { carouselState: { currentSlide } } = rest;
    //     return (
    //         <div className="carousel-button-group"> // remember to give it position:absolute
    //             <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
    //             <ButtonTwo onClick={() => next()} />
    //             <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree>
    //         </div>
    //     );
    // };


    return (
        <div className="bg-dark text-white">
            <Carousel

                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                // ssr={true} // means to render carousel on server-side.
                infinite={true}

                // autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet"]}

                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {viewWidth()}
                <div>
                    <Link to="./" >
                         <img src={pic1} className="carousel-image-multi" alt="" style={{width: vh}}/>
                    </Link>
                    <div className=" d-block text-center ">
                        <h5>relaxing</h5>
                        <p>relaxing</p>
                    </div>
                </div>
                <div>
                    <Link to="./" >
                        <img src={pic2} className="carousel-image-multi" alt="" style={{width: vh}}/>
                    </Link>
                    <div className=" text-center d-block">
                        <h5>running</h5>
                        <p>running</p>
                    </div>
                </div>
                <div>
                    <Link to="./" >
                        <img src={pic3} className="carousel-image-multi" alt="" style={{width: vh}}/>
                    </Link>
                    <div className=" text-center d-block ">
                        <h5>Club Hits</h5>
                        <p>Club Hits</p>
                    </div>
                </div>
                <div>
                    <img src={pic4} className="carousel-image-multi" alt="" style={{width: vh}}/>
                    <div className=" text-center d-block">
                        <h5>TODAY'S</h5>
                        <p>TOP HITS</p>
                    </div>
                </div>
                <div>
                    <img src={pic5} className="carousel-image-multi" alt="" style={{width: vh}}/>
                    <div className=" text-center d-block">
                        <h5>traffic</h5>
                        <p>traffic</p>
                    </div>
                </div>
                <div>
                    <img src={pic6} className="carousel-image-multi" alt="" style={{width: vh}}/>
                    <div className=" text-center d-block">
                        <h5>CLASSIC</h5>
                        <p>oldies</p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

// <div>
//     <img src={pic1} alt=""/>
//     Item 1
// </div>
// <div>
// <img src={pic2} alt=""/>
//     Item 1
// </div>
// <div>
//     <img src={pic3} alt=""/>
//     Item 1
// </div>
// <div>
// <img src={pic4} alt=""/>
//     Item 1
// </div>

export default MultiItemCarousel;