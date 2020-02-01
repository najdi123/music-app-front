import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router';
import {Link} from "react-router-dom";

import ReactPlayer from 'react-player'
import '../DisplaySongs.css'
import Axios from "axios";


const DisplaySongs = () => {
    const [data, setData] = useState([])
    // const [loading, setLoading] = useState(true)

    const [songName, setSongName] = useState("");
    const [singer, setSinger] = useState("");
    const [category, setCategory] = useState("");
    const [views, setViews] = useState("");

    let location = useLocation();
    // console.log(location.state.songId);
    const songId = location.state.songId.toString();

    useEffect(() => {
        fetch(`http://localhost:5000/api/showSong/${songId}`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.log(err))

    },[songId]);

    const DeleteSong = () => {
        return fetch(`http://localhost:5000/api/showSong/${songId}`, {method: 'DELETE'})
            .then(res => res.json())
            .then(res => {
                console.log('Deleted:', res.message)
                return res
            })
            .catch(err => console.error(err))
    };

    const EditSong = (e) => {
        e.preventDefault();

        const editData = new FormData();

        editData.append("songName", songName);
        editData.append("singer", singer);
        editData.append("category", category);
        editData.append("views", views);

        Axios.put(`http://localhost:5000/api/editSong/${songId}`, editData, {
            headers: {"Content-Type": "multipart/form-data"},
        }).then(res => {
            console.log(res.data);
            console.log('Edited song')

        });

        // return fetch(`http://localhost:5000/api/editSong/${songId}`,editData, {method: 'PUT'})
        //     .then(res => res.json())
        //     .then(res => {
        //         console.log('Edited:', res.message)
        //         return res
        //     })
        //     .catch(err => console.error(err))
    };

    return (
        <div className="m-5 row">
            <div className="bg-light mb-5 col-sm-8">

                <p className="text-center pt-2"> {data.songName} آهنگ جدید </p>
                <p className="text-center"> {data.singer} از</p>

                <button onClick={DeleteSong} className="btn btn-danger m-1"><Link to='/admin'>Delete</Link></button>

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

            {/* edit form */}
            <div className="col-sm-4 pt-5">
                <form encType="multipart/form-data" onSubmit={EditSong}>
                    {/*<label htmlFor="name">Name: </label>*/}
                    <div className="form-group">
                        <input
                            className="btn-block text-center"
                            placeholder={data.songName}
                            type="text"
                            name="song"
                            onChange={e => setSongName(e.target.value)}
                            value={songName}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            className="btn-block text-center"
                            placeholder={data.singer}
                            type="text"
                            name="singer"
                            onChange={e => setSinger(e.target.value)}
                            value={singer}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            className="btn-block text-center"
                            placeholder={data.category}
                            type="text"
                            name="category"
                            onChange={e => setCategory(e.target.value)}
                            value={category}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            className="btn-block text-center"
                            placeholder={data.views}
                            type="text"
                            name="category"
                            onChange={e => setViews(e.target.value)}
                            value={views}
                        />
                    </div>

                    <button
                        className="btn btn-primary btn-block"
                        type="submit"
                    >
                        Submit
                    </button>

                </form>
            </div>
        </div>
    );
}

export default DisplaySongs;