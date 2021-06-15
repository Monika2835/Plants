import React, { Component, useState, useEffect } from 'react';
import "./Forum.css";
import Axios from "axios";
import './Home.css';

function Home() {

    const [blog1, setBlog1] = useState("");
    const [blog2, setBlog2] = useState("");
    const [blog3, setBlog3] = useState("");
    const [blog4, setBlog4] = useState("");

    const getBlogs = () => {
        Axios.get(`http://localhost:8080/plants/get/blogs`)
            .then(response => {
                const newBlogs = response.data
                setBlog1(newBlogs[0]);
                setBlog2(newBlogs[1]);
                setBlog3(newBlogs[2]);
                setBlog4(newBlogs[3]);
                console.log(blog1);
            })
            .catch(error => console.error(`Error:  ${error}`));
    }

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <div>
            <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}></div>
            <img src={require('./images/background.jpg').default} height={400} width={1110}/>
            <h3 style={{ fontFamily: 'Courier New', marginTop: '30px', fontWeight: 'bold' }}>The latest posts</h3>
            {console.log(blog1.blob)}
            <div> 
                <div className="recent-posts" onClick={(e)=>{ window.location.href = `http://localhost:3000/blog`;}}>
                    <img src={require('./images/dog.jpg').default} height={ 260} width={ 260} className='recent-image'/>
                    <h4>{blog1.title}</h4>
                </div>
                <div className="recent-posts" onClick={(e)=>{ window.location.href = `http://localhost:3000/blog`;}}>
                    <img src={require('./images/dog.jpg').default} height={ 260} width={ 260}/>
                    <h4>{blog2.title}</h4>
                </div>
                <div className="recent-posts" onClick={(e)=>{ window.location.href = `http://localhost:3000/blog`;}}>
                    <img src={require('./images/dog.jpg').default} height={ 260} width={ 260}/>
                    <h4>{blog3.title}</h4>
                </div>
                <div className="recent-posts" onClick={(e)=>{ window.location.href = `http://localhost:3000/blog`;}}>
                    <img src={require('./images/dog.jpg').default} height={ 260} width={ 260}/>
                    <h4>{blog4.title}</h4>
                </div>
                <div className="empty"></div>
            </div>
            <div>
                <h3 style={{ fontFamily: 'Courier New', marginTop: '30px', fontWeight: 'bold' }}>About me</h3>
                <div id="picture">
                    <img src={require('./images/about.jpeg').default} height={ 400} width={ 600}/>
                </div>
                <div id="description">
                    <h4>
                        I am a full of energy, young woman, who loves to take care of every kind of plants!
                        For many years I was interested in plants and I was eagerly looking for inspiration about them.
                    </h4>
                    <a className="read-more" href="./about">Read more...</a>
                </div>
                <div className="empty"></div>
            </div>
        </div>
    );
}

export default Home;