import React from 'react';
import "./Question.css";
import Question from './Question';

export default class Reply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: props.nickname,
            description: props.description,
        }
    }

    render() {
        return (
            <div>
                <h3 >{this.state.nickname}</h3>
                {this.state.description}
            </div>
        );
    }
}