import React, {useState, useEffect} from 'react';

import {useLocation} from 'react-router';

import ReactPlayer from 'react-player';
import './DisplaySongs.css';
import OtherSongsFromSinger from "./OtherSongsFromSinger";
import {Link} from "react-router-dom";
import loggedReducer from "../../reducers/isSigned";


const DisplaySongs = () => {
    const [data, setData] = useState([]);
    const [data3, setData3] = useState({
        songName: '',
        singer: '',
        imageURL: '',
        songURL: '',
        views: '',
        likes: ''
    });
    const [likes, setLikes] = useState({
        likesNumber: '',
        error: ''
    })
    const [error, setEroor] = useState('')
    const [commentText, setCommentText] = useState('');
    const [showComments, setShowComments] = useState([]);
    // const [data2, setData2] = useState([]);
    // const [loading, setLoading] = useState(true)

    // let location = useLocation();
    // console.log(location.state.songId);
    const songId = useLocation().state.songId.toString();

    useEffect(() => {
        const fetchData = async () => {
            console.log('async fetch data1')
            let res = await fetch(`http://localhost:5000/api/showSong/${songId}`);
            let response = await res.json();
            setData(response);
            setData3({
                songName: response.songName,
                singer: response.singer,
                imageURL: response.imageURL,
                songURL: response.songURL,
                category: response.category,
                views: response.views,
                likes: response.likes.length
            })
            setLikes({
                likesNumber : response.likes.length})
        };
        fetchData();
        // fetch(`http://localhost:5000/api/showSong/${songId}`)
        //     .then(res => res.json())
        //     .then(res => setData(res))
        //     // .then(
        //     //     fetch(`http://localhost:5000/api/showSongsBySinger/singer?singer=Mohi`)
        //     //         .then(res => res.json())
        //     //         .then(data2 => (setData2(data2.reverse())), console.log(data2))
        //     //         .catch(err => console.log(err))
        //     // )
        //     .catch(err => console.log(err));
        // getSingersOtherSongs();

    }, [songId]);

    const LikeSong = async (e) => {
        e.preventDefault()
        let token = localStorage.getItem('myData');

        await fetch(`http://localhost:5000/api/like/${songId}`, {
            method: 'PUT',
            headers: new Headers({
                // 'Content-Type': 'text/plain',
                'auth-token':token
            }),
            credentials: "same-origin"
        })
            .then(res => res.json())
            .then(res => {

                res.message
                    ?

                    fetch(`http://localhost:5000/api/unlike/${songId}`, {
                        method: 'PUT',
                        headers: new Headers({
                            // 'Content-Type': 'text/plain',
                            'auth-token':token
                        }),
                        credentials: "same-origin"
                    }).then(res => res.json()).then(res => setLikes({ likesNumber: res.length }))


                    :
                    setLikes({
                                    likesNumber: res.length
                                });

                return res
            })
            .catch(err => console.error(err))
    };
    useEffect(() => {
        // const GetComments = async () => {
            fetch(`http://localhost:5000/api/comments/${songId}`)
                .then(res => res.json())
                .then( data => ( setShowComments(data) ) )
                .catch(err => console.log(err))
        // }
    },[]);

    const SubmitComment = async (e) => {
        e.preventDefault()
        let token = localStorage.getItem('myData');

        const objectText = {
            commentText
        }

        await fetch(`http://localhost:5000/api/comment/5e20bdfef047ee2e5840fb78`, objectText, {
            method: 'POST',
            body: JSON.stringify(objectText),
            headers: new Headers({
                'Content-Type': 'application/json',
                'auth-token':token
            }),
            credentials: "cross-origin"
        })
            .then(res => res.json())

    };



    return (
        <div className="">


            <div className="bg-light mb-5 mt-5 p-md-5 col-lg-6 container ">

                <p className="text-center pt-2"> {data3.songName} آهنگ جدید </p>
                <p className="text-center"> {data3.singer} از</p>
                <img width="100%" src={"http://localhost:5000/" + data3.imageURL} alt=""/>

                <ReactPlayer
                    url={"http://localhost:5000/" + data3.songURL}
                    playing={false}
                    controls={true}
                    light={false}
                    height={40}
                    width={'100%'}
                />
                <form method="get" action={"http://localhost:5000/" + data3.songURL} className=" d-inline-block">
                    <button type="submit" className="btn btn-primary m-1">
                        دانلود
                    </button>
                </form>
                <p className="d-inline-block ml-3">{data3.views} </p>
                {/*{console.log(data.comments ? data.comments[0]._id : '')}*/}
                {data.likes ? console.log(data.likes.length):console.log('ab')}
                {/*<p className="d-inline-block ml-3">{data.likes ? data.likes.length : ''} Likes</p>*/}
                {console.log(likes.likesNumber)}
                <p className="d-inline-block ml-3">{likes.likesNumber} Likes</p>
                {/*<button onClick={LikeSong} className=" d-inline-block ml-3">*/}
                <i className="fas fa-thumbs-up d-inline-block ml-3 btn btn-primary" onClick={LikeSong}></i>
                {/*</button>*/}
                {error ? <p className="d-inline-block ml-3">{error}</p> : '' }

                <p className="d-inline-block ml-3">category: {data3.category}</p>

                <form onSubmit={SubmitComment} className="p-1">
                    {/*<label htmlFor="name">Name: </label>*/}
                    <div className='bg-dark'>
                        <h4 className="p-1 text-light">Leave a Comment</h4>
                    </div>
                    {console.log(commentText)}
                    <div className="form-group">
                        <textarea
                            className="btn-block p-1"
                            name="commentText"
                            cols='30'
                            rows='5'
                            placeholder="Comment on the song"
                            value={commentText}
                            onChange={e => setCommentText(e.target.value)}
                            required
                        />
                        <input type='submit' className='btn btn-dark my-1' value='Submit' />
                    </div>
                </form>
                {
                    showComments.map((item, i) =>
                        <div key={i} className="">
                            {console.log(item)}
                            <div className="bg-white">
                                <h5 className="d-inline-block ml-2 bg-white p-2">{item.name + ': ' }</h5>
                                <p className="d-inline-block ml-2">{item.text}</p>
                                <p className="text-center"></p>

                            </div>
                        </div>


                )}


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