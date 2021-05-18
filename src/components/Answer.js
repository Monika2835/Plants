import React from 'react';
import "./Forum.css";
import Question from './Question';

export default class Answer extends React.Component {
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
            <div href="./home" className="question" onClick={(e)=>{ window.location.href = `http://localhost:3000/question`;}}>
                <h3 className = "title">{this.state.title}</h3>
                <div className="discription">{this.state.description}</div>
            </div>
        );
    }
}