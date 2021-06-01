import React, { Component, useState, useEffect } from 'react';
import "./Forum.css";
import Axios from "axios";
import Post from './Post';


function Forum (){

    const [titleInput, setTitle] = useState("");
    const [descriptionInput, setDescription] = useState("");

    const submitData = (e) => {
        e.preventDefault()
        console.log("im here")
        console.log(titleInput)
        console.log(descriptionInput)
        Axios.post('http://localhost:8080/plants/create/posts', {
            "idUser": "1",
            "title": titleInput,
            "description": descriptionInput,
        })
        .then((response) => {
            console.log("good");
            window.location.reload(false);
          })
        .catch((error) => {
            console.log("wrong data")
          })
        
    }
    
    const [posts, getPosts] = useState('');

    const getAllPosts = () => {
        Axios.get('http://localhost:8080/plants/get/posts')
            .then(response => {
                const allPosts = response.data
                getPosts(allPosts);
            })
            .catch(error => console.error(`Error:  ${error}`));
    }

    useEffect(() => {
        getAllPosts();
    }, []);

   
    if (posts.length > 0){
        return (
            <div>
                <div style={{dispay: "block", justifyContent: "center", alignItems: "center"}}>
                    Title
                    <input type="titleInput" className="form-control" placeholder="Title" name="title" 
                            onChange={(e)=>{ setTitle(e.target.value)}}/>   
                    Description
                    <input type="descriptionInput" className="form-control" placeholder="Descrition" name="Description" 
                            onChange={(e)=>{ setDescription(e.target.value)}}/>
                    <button style={{marginTop: '30px'}} type="submit" className="btn btn-success btn-lg btn-block" 
                            onClick={(e) => submitData(e)}>Add new question</button>
                    <div className="break"></div>
                </div>
                <div style={{dispay: "block", justifyContent: "center", alignItems: "center"}}>
                    {posts.map((post) => <Post title={post.title} description={post.description} postId={post.idPost}/>)}
                </div>
            </div>
        );
    }
    else {
        return (
        <div>
            Title
            <input type="titleInput" className="form-control" placeholder="Title" name="title" onChange={(e)=>{ setTitle(e.target.value)}}/>   
            Description
            <input type="descriptionInput" className="form-control" placeholder="Descrition" name="Description" onChange={(e)=>{ setDescription(e.target.value)}}/>
            <button style={{marginTop: '30px'}} type="submit" className="btn btn-success btn-lg btn-block" 
                    onClick={(e) => submitData(e)}>Add new question</button>
            <div className="break"></div>
        </div>
        )
    }
    
}

export default Forum;