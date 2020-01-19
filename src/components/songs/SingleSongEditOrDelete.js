import React, {useState, useEffect} from 'react';

import { useLocation} from 'react-router';

import ReactPlayer from 'react-player'
import './DisplaySongs.css'


const DisplaySongs = () => {
    const [data, setData] = useState([])
    // const [loading, setLoading] = useState(true)

    let location = useLocation();
    // console.log(location.state.songId);
    const songId = location.state.songId.toString();

    useEffect(() => {
        fetch(`http://localhost:5000/api/showSong/${songId}`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.log(err))

    }, [])


    return (
        <div className="container">


            <div className="bg-light mb-5 ">

                <p className="text-center pt-2"> {data.songName} آهنگ جدید </p>
                <p className="text-center"> {data.singer} از</p>
                <img width="100%" src={"http://localhost:5000/" + data.imageURL} alt=""/>
                <a target="_blank" href={"http://localhost:5000/" + data.songURL}><p
                    className="text-center">دانلود</p></a>
                <ReactPlayer
                    url={"http://localhost:5000/" + data.songURL}
                    playing={false}
                    controls={true}
                    light={false}
                    height={40}
                    width={'100%'}
                />

            </div>
        </div>
    );
}

export default DisplaySongs;