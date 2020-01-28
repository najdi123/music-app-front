import React, {useState} from 'react';
import {Link} from "react-router-dom";

import Axios from "axios";
import './UploadSong.css'

const Upload = () => {

    const [songName, setSongName] = useState("");
    const [singer, setSinger] = useState("");
    const [category, setCategory] = useState("");
    const [songFile, setSongFile] = useState({});
    const [photo, setPhoto] = useState({});
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        const data = new FormData();

        data.append("songName", songName);
        data.append("singer", singer);
        data.append("category", category);
        data.append("songURL", songFile);
        data.append("imageURL", photo);

        Axios.post("http://localhost:5000/api/addSong", data, {
            headers: {"Content-Type": "multipart/form-data"},
        }).then(res => {
            console.log(res.data);
            console.log('yes! success')
            setSuccess(true)
        });
    };

    const handleSelectedSongFile = e => {
        setSongFile(e.target.files[0]);
    };
    const handleSelectedPhoto = e => {
        setPhoto(e.target.files[0]);
    };

    return (
        <div>

            {success ? <div className="alert alert-success">'Song was uploaded successfully'</div> : ''}

            <form encType="multipart/form-data" onSubmit={handleSubmit}>
                {/*<label htmlFor="name">Name: </label>*/}
                <div className="form-group">
                    <input
                        className="btn-block text-center"
                        placeholder=" اسم آهنگ"
                        type="text"
                        name="song"
                        onChange={e => setSongName(e.target.value)}
                        value={songName}
                    />
                </div>

                <div className="form-group">
                    <input
                        className="btn-block text-center"
                        placeholder=" اسم خواننده"
                        type="text"
                        name="singer"
                        onChange={e => setSinger(e.target.value)}
                        value={singer}
                    />
                </div>

                <div className="form-group">
                    <input
                        className="btn-block text-center"
                        placeholder="دسته بندی"
                        type="text"
                        name="category"
                        onChange={e => setCategory(e.target.value)}
                        value={category}
                    />
                </div>

                {/*<label htmlFor="file">File: </label>*/}
                <div className="custom-file was-validated mb-3">
                    <label className="custom-file-label text-center" htmlFor="validatedCustomFile">فایل موزیک</label>
                    <input
                        placeholder="Music file"
                        type="file"
                        name="song"
                        onChange={handleSelectedSongFile}
                        className="custom-file-input"
                        id="validatedCustomFile"
                        required
                    />
                    <div className="invalid-feedback">Pick an audio or mp3 file no bigger than 15mb</div>
                </div>

                <div className="custom-file was-validated mb-3">
                    <label className="custom-file-label text-center" htmlFor="validatedCustomFile">عکس آهنگ</label>
                    <input
                        placeholder="Cover Photo"
                        type="file"
                        name="photo"
                        onChange={handleSelectedPhoto}
                        className="custom-file-input"
                        id="validatedCustomFile"
                        required

                    />
                    <div className="invalid-feedback">Pick an image which is jpeg or png and not bigger than 5mb</div>
                </div>


                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                >
                    Submit
                </button>

            </form>
        </div>
    );
};

export default Upload;