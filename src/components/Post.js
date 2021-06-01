import React from 'react';
import "./Forum.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Question from './Question';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description,
            postId: props.postId
        }
    }

    render() {
        return (
            <div href="./home" className="question" onClick={(e)=>{ 
                    localStorage.setItem('postId', this.state.postId);
                    window.location.href = `http://localhost:3000/question`;
                }}>
                {console.log(this.state.postId)}
                <h3 className = "title">{this.state.title}</h3>
                <div className="description">{this.state.description}</div>
            </div>
        );
    }
}