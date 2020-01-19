import React from 'react';
import Layout from "../components/Layout";

import DisplaySongs from "../components/songs/DisplaySongs";
import UploadSong from "../components/songs/UploadSong";
import CarouselTop from "../components/carousel top/CarouselTop";


const Home = () => {
    return (
        <div>
            <CarouselTop/>
            <div className="row mt-3 container">
                <div className="col-11 col-md-8 offset-md-3  offset-1">
                    <DisplaySongs/>
                </div>
                {/*<div className="col-12 col-sm-5 offset-1 mb-5">*/}
                {/*    <UploadSong/>*/}
                {/*</div>*/}


            </div>


        </div>
    );
}

export default Home;
