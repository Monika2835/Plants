import React, { Component, useState, useEffect } from 'react';
import Axios from "axios";
import "./Article.css"

function Article (){

    const [titleInput, setTitle] = useState("");
    const [descriptionInput, setDescription] = useState("");
    const [descriptionInput1, setDescription1] = useState("");
    const [descriptionInput2, setDescription2] = useState("");


    const getBlog = () => {
        localStorage.setItem('userId', localStorage.getItem('userId'));
        const blogId = localStorage.getItem('blogId');
        console.log(blogId);
        Axios.get(`http://localhost:8080/plants/get/blog/${blogId}`)
            .then(response => {
                const blog = response.data[0];
                setDescription(blog.description);
                setTitle(blog.title);
            })
            .catch(error => console.error(`Error:  ${error}`));
        const descLength = descriptionInput.length / 2;
        const index = descriptionInput.substring(0, descLength).lastIndexOf(" ");
        setDescription1(descriptionInput.substring(0, index + 1));
        setDescription2(descriptionInput.substring(index, descriptionInput.length));
    }

    useEffect(() => {
        getBlog();
    }, []);

    return (
        
        <div style={{justifyContent: "center", alignItems: "center"}}>
            <div className = "box">
                <h4 alignItems = "center">{titleInput}</h4>
                <div>
                   {descriptionInput1}
                </div>
                {/* <div>
                    <img style={{marginTop: '20px'}} className="mr-3"src={require('./images/kwiaty.jpg').default} height={ 350} width={ 400} alt="Generic placeholder image"/> 
                </div> */}
                <div>
                   {descriptionInput2}
                </div>
            </div>
        </div>
    );
}

export default Article;