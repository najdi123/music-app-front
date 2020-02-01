import React from 'react';
// import Layout from "../components/Layout";

import DisplaySongs from "../components/songs/DisplaySongs";
import CarouselTop from "../components/carousel top/CarouselTop";
import MultiItemCarousel from "../components/MultiItemCarousel/MultiItemCarousel";
import NewMultiItemCarousel from "../components/NewMultiItemCarousel/NewMultiItemCarousel";
import CarouselBySinger from "../components/CarouselBySinger/CarouselBySinger";


const Home = () => {
    return (
        <div>
            <CarouselTop/>
            <h5 className="pt-4 pl-5">New Songs:</h5>
            <NewMultiItemCarousel/>
            <MultiItemCarousel/>
            <h5 className="pt-4 pl-4">Songs By Oliver Tree:</h5>
            <CarouselBySinger/>
            <div className="row mt-3 container">
                <div className="col-11 col-md-8 offset-md-3  offset-1">
                    <DisplaySongs/>
                </div>

            </div>


        </div>
    );
}

export default Home;
