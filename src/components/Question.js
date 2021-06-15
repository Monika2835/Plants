import React, { Component, useState, useEffect } from 'react';
import "./Question.css"
import Axios from "axios"
import Answer from './Answer.js';

function Question (){

    const [titleInput, setTitle] = useState("");
    const [descriptionInput, setDescription] = useState("");
    const [answer, setAnswer] = useState("");

    const [replies, setReplies] = useState('');
    const [post, setPost] = useState('');

    const getPost = () => {
        const postId = localStorage.getItem('postId');
        console.log(postId);
        Axios.get(`http://localhost:8080/plants/get/post/${postId}`)
            .then(response => {
                const post = response.data[0];
                setPost(post);
                console.log(post);
                const allReplies = post.replays;
                setReplies(allReplies);
                setDescription(post.description);
                setTitle(post.title);
            })
            .catch(error => console.error(`Error:  ${error}`));
    }

    const submitData = (e) => {
        e.preventDefault()
        console.log("HERE ");
        console.log(answer);
        Axios.post('http://localhost:8080/plants/create/replies', {
            "idPost": post.idPost,
            "idUser": 1,
            "description": answer,
        })
        .then((response) => {
            console.log("good");
            window.location.reload(false);
          })
        .catch((error) => {
            console.log({error})
          })
        
    }

    useEffect(() => {
        getPost();
    }, []);

    return (
        
        <div style={{justifyContent: "center", alignItems: "center"}}>
            <div className="questionQ" >
                <h3 className = "titleQ">{titleInput}</h3>
                <div className="discriptionQ">
                   {descriptionInput}
                </div>
            </div>
            <div>
                {console.log(replies)}  
                {Object.values(replies).map((reply) => <Answer nickname={reply.idUser} description={reply.description}/>)}
            </div>
            <div className = "a">
                Do you know the answer? Share it with others!
                <input type="answer" className="form-control" placeholder="" name="Answer" 
                        onChange={(e)=>{ setAnswer(e.target.value)}}/>
                <button style={{marginTop: '30px'}} type="submit" className="btn btn-success btn-lg btn-block" 
                                onClick={(e) => submitData(e)}>Add your answer</button>
            </div>
        </div>
    );
}

export default Question;