import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

const OtherSongsFromSinger = (props) => {
    const [data2, setData2] = useState([])

    var singerName = props.data.singer

    useEffect(() => {

        //fetch(`http://localhost:5000/api/showSongsBySinger/singer?singer=${singerName}`)
        fetch(`http://localhost:5000/api/showSongsBySinger/singer?singer=${props.data.singer}`)
            .then(res => res.json())
            .then(data2 => (setData2(data2.reverse())))
            .catch(err => console.log(err))

    }, [props.data])

    var vh;
    var imageHeight = window.innerHeight;
    // vh = imageHeight / 4 - (imageHeight / 100) + 'px';
    vh = (imageHeight / 3) + 'px';

    var smallScreenMargin = window.innerWidth;

    var marginLeft;
    if (smallScreenMargin<576) {
        marginLeft = 'ml-5 pl-5'
    }
    // if (smallScreenMargin<480) {
    //     marginLeft = 'ml-5 pl-5'
    // }
    if (smallScreenMargin<420) {
        marginLeft = 'ml-5 pl-3'
    }
    if (smallScreenMargin<350) {
        marginLeft = 'ml-4 pl-2'
    }


    return (
        <div className="row container">

            {console.log(typeof singerName)}
            {console.log(data2)}
            {data2.map((item, i) =>
                <Link
                    className="song-links col-sm-6 col-md-4 "
                    to={{
                        pathname: `/work`,
                        state: {
                            songId: item._id
                        }
                    }}
                >
                    <div key={i} className={marginLeft}>
                        <img src={"http://localhost:5000/" + item.imageURL} alt={item.songName} className="songImage "
                             style={{width: vh, height: vh}}/>

                        <div className=" d-block">
                            <h5>{item.songName}</h5>
                            <p>{item.singer}</p>


                        </div>
                        <p>
                            {item.views} :بازدید
                            <span className="ml-4">Likes: 12</span>
                        </p>
                    </div>
                </Link>
            )}


        </div>
    );
};

export default OtherSongsFromSinger;