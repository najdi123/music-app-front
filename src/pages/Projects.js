import React, { useState } from 'react';
import Layout from "../components/Layout";

const Projects = () => {


    const [data, setdata] = useState([
        {title: 'oooo', description: 'yes'},
        {title: 'gooo', description: 'i describe'}
        ])
    // useCallback(async () =>
    const clickSubmit = async event => {
        event.preventDefault()
        let token = localStorage.getItem('myData');
        let type = localStorage.getItem('type');
        console.log(token)
        await fetch( "http://localhost:5000/api/posts", {
            method: 'GET',
            headers: new Headers({
                // 'Content-Type': 'text/plain',
                'auth-token':token,
                'type':type
            }),
            credentials: "same-origin"
        })
            // .then(res => return res.json())
            .then(res => (
                console.log('first'),
                console.log(res),
                res.json()
                )
            )
            .then(res => setdata(res) ,
            console.log('second'),
                console.log(data),
                console.log('end of req')
            ).catch(err => console.log(err))
    }


    return(
        <Layout>
            <div className="container offset-1 pr-5">

                <button onClick={clickSubmit} className="btn btn-primary">Sign in and Click to change the text</button>
                {
                    data.map((item, i) =>
                        <div key={i}>
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                        </div>

                    )
                }

            </div>
        </Layout>
    );
}

export default Projects;
