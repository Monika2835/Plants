import React, { Component, useState, useEffect } from 'react';
import "./Question.css"
import Axios from "axios"
import Post from "./Post"
import Reply from "./Reply"
import Answer from './Answer';

function Question (){

    const [titleInput, setTitle] = useState("");
    const [descriptionInput, setDescription] = useState("");

    const [replies, setReplies] = useState('');

    const getPost = () => {
        const postId = localStorage.getItem('postId');
        console.log(postId);
        Axios.get(`http://localhost:8080/plants/get/post/${postId}`)
            .then(response => {
                const post = response.data[0];
                const allReplies = post.replays;
                setReplies(allReplies);
                setDescription(post.description);
                setTitle(post.title);
            })
            .catch(error => console.error(`Error:  ${error}`));
    }

    useEffect(() => {
        getPost();
    }, []);

    return (
        
        <div style={{justifyContent: "center", alignItems: "center"}}>
            <div className="question" >
                <h3 className = "title">{titleInput}</h3>
                <div className="discription">
                   {descriptionInput}
                </div>
            </div>
            <div>
                {console.log(replies)}  
                {Object.values(replies).map((reply) => <Answer nickname={reply.idUser} description={reply.description}/>)}
            </div>
        </div>
    );
}

export default Question;