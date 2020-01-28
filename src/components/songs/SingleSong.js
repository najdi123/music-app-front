import React, {useState, useEffect} from 'react';

import { useLocation} from 'react-router';

import ReactPlayer from 'react-player';
import './DisplaySongs.css';
import OtherSongsFromSinger from "./OtherSongsFromSinger";
import loggedReducer from "../../reducers/isSigned";


const DisplaySongs = () => {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    // const [loading, setLoading] = useState(true)

    let location = useLocation();
    // console.log(location.state.songId);
    const songId = useLocation().state.songId.toString();

    useEffect(() => {
        fetch(`http://localhost:5000/api/showSong/${songId}`)
            .then(res => res.json())
            .then(res => setData(res))
            // .then(
            //     fetch(`http://localhost:5000/api/showSongsBySinger/singer?singer=Mohi`)
            //         .then(res => res.json())
            //         .then(data2 => (setData2(data2.reverse())), console.log(data2))
            //         .catch(err => console.log(err))
            // )
            .catch(err => console.log(err));
        getSingersOtherSongs();

    },[songId]);

    const getSingersOtherSongs = () => {
        // useEffect(() => {
        //
        //     fetch('http://localhost:5000/api/showSongsBySinger/singer?singer=Oliver Tree')
        //         .then(res => res.json())
        //         .then(data2 => (setData2(data2.reverse())))
        //         .catch(err => console.log(err))
        //
        // }, [])
    }


    return (
        <div className="">


            <div className="bg-light mb-5 mt-5 p-md-5 col-lg-6 container ">

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
                <p>{data.views} views</p>
                <p>category: {data.category}</p>
            </div>

            <div className="">

                <OtherSongsFromSinger data={data}/>

                {/*{data2.map((item, i) =>*/}
                {/*    <div key={i} >*/}
                {/*        <img src={"http://localhost:5000/"+item.imageURL} alt={item.songName}  className="songImage"/>*/}
                {/*        <div className=" text-center d-block">*/}
                {/*            <h5>{item.songName}</h5>*/}
                {/*            <p>{item.singer}</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*)}*/}
            </div>

        </div>
    );
}

export default DisplaySongs;