import React, { useState, useEffect } from 'react';

// import ReactPlayer from 'react-player'
import '../DisplaySongs.css'
import {Link} from "react-router-dom";


const DisplaySongs = () => {
    const [data, setData] = useState([])
    // const [loading, setLoading] = useState(true)


    //'http://localhost:5000/api/songs'
    useEffect(() => {

        fetch('http://localhost:5000/api/showSongs')
            .then(res => res.json())
            .then( data => ( setData( data.reverse()) ) )
            .catch(err => console.log(err))

    }, [])


    return (
        <div>

            {

                data.map((item, i) =>
                    <div key={i} className="bg-light mb-5 ">




                        <div className="text-center pt-2">
                            <Link
                                className="song-links"
                                to={{
                                    pathname: `/EditSong`,
                                    state: {
                                        songId: item._id
                                    }
                                }}
                            >

                                <h5 className="text-centerعا"> آهنگ جدید  {item.songName}</h5>
                                <p className="text-center"> از {item.singer}</p>
                                <img width="100%" src={"http://localhost:5000/"+item.imageURL} alt=""/>

                                <p>{item.views} views</p>
                                <p>category: {item.category}</p>

                                <p>برای پخش و دانلود کلیک کنید</p>
                            </Link>
                        </div>

                        {/*<a target="_blank" href={"http://localhost:5000/"+item.songURL}><p className="text-center">Download</p></a>*/}
                        {/*<ReactPlayer*/}
                        {/*    url={"http://localhost:5000/"+item.songURL}*/}
                        {/*    playing={false}*/}
                        {/*    controls={true}*/}
                        {/*    light={false}*/}
                        {/*    height={40}*/}
                        {/*    width={'100%'}*/}
                        {/*/>*/}

                    </div>
                )
            }

        </div>
    );
}

export default DisplaySongs;