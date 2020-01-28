import React from 'react';
import Layout from "../../components/Layout";

import DisplaySongsAdmin from "../../components/songs/Admin Components/DisplaySongsAdmin";
import UploadSong from "../../components/songs/Admin Components/UploadSong";
import CarouselTop from "../../components/carousel top/CarouselTop";


const Home = () => {
    return (
        <div>
            <Layout title="Admin Page" description="add songs" className="container">
                <div className="row mt-3 container">
                    <div className="col-12 col-sm-5 offset-1">
                        <DisplaySongsAdmin/>
                    </div>
                    <div className="col-12 col-sm-5 offset-1 mb-5">
                        <UploadSong/>
                    </div>
                </div>
            </Layout>


        </div>
    );
}

export default Home;
