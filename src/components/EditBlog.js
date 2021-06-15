import React, { Component, useState, useEffect } from 'react';
import { TextInput } from 'react-native';
import Axios from 'axios';
import {Button} from 'react-bootstrap';

export default function EditBlog () {

    const [titleInput, setTitle] = useState("");
    const [descriptionInput, setDescription] = useState("");
    const [titleChanged, setTitleChanged] = useState("");
    const [descriptionChanged, setDescriptionChanged] = useState("");


    const getBlog = () => {
        localStorage.setItem('userId', localStorage.getItem('userId'));
        const blogId = localStorage.getItem('blogId');
        console.log(blogId);
        Axios.get(`https://localhost:8080/plants/get/blog/${blogId}`)
            .then(response => {
                const blog = response.data[0];
                setDescription(blog.description);
                setTitle(blog.title);
            })
            .catch(error => console.error(`Error:  ${error}`));
    }

    const edit = (e) => {
        e.preventDefault()

        const blogId = localStorage.getItem('blogId');
        Axios.put(`http://localhost:8080/plants/edit/blog/${blogId}`, {
                "title": titleInput,
                "description": descriptionInput,
            })
            .then((response) => {
                window.location.href = "http://localhost:3000/blog";
            })
            .catch((error) => {
                console.log({error})
            })    
    }

    const deleteBlog = (e) => {
        e.preventDefault()

        const blogId = localStorage.getItem('blogId');
        Axios.delete(`http://localhost:8080/plants/delete/blogs/${blogId}`, {})
            .then((response) => {
                window.location.href = "http://localhost:3000/blog";
            })
            .catch((error) => {
                console.log({error})
            })    
    }

    useEffect(() => {
        getBlog();
    }, []);

    return (
        <div>
            <div style = {{padding: 50}}>
                <TextInput 
                    style={{width: 1000, fontSize: 20}}
                    multiline={true}
                    placeholder="Title"
                    onChange={(e)=>{ setTitle(e.target.value) }}
                    value={titleInput}
                    defaultValue={titleInput}/> 
                <div style={{width: 1100, paddingTop: 30}}/>
                <TextInput 
                    style={{ height: 350, width: 1000, fontSize: 16}}
                    multiline={true}
                    placeholder="Description"
                    onChange={(e)=>{ setDescription(e.target.value)}}
                    value={descriptionInput}
                    defaultValue={descriptionInput}/> 
            </div>
            <div style = {{paddingLeft: 50}}>
                <Button 
                    variant="outline-success" 
                    style = {{paddingLeft: 40, paddingRight: 40}}
                    onClick={(e)=>{edit(e)}}>
                    Save changes
                </Button>{' '}
                <Button 
                    variant="outline-danger" 
                    onClick={(e)=>{deleteBlog(e)}}>
                    Delete
                </Button>
            </div>
        </div>
    );
}