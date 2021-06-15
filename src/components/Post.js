import React, { Component, useState, useEffect } from 'react';
import "./Forum.css";

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        const descLength = 250;
        const desc = props.description.substring(0, descLength).lastIndexOf(" ");
        this.state = {
            title: props.title,
            description: props.description,
            shortDescription: props.description.length > descLength ? props.description.substring(0, desc) + '...': props.description,
            postId: props.postId
        }
    }

    render() {
        return (
            <div className="question" onClick={(e)=>{ 
                    localStorage.setItem('postId', this.state.postId);
                    window.location.href = `http://localhost:3000/question`;
                }}>
                {console.log(this.state.postId)}
                <h3 className = "title" style = {{width: 1100}}>{this.state.title}</h3>
                <div className="description">{this.state.shortDescription}</div>
            </div>
        );
    }
}