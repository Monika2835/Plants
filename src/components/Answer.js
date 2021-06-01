import React from 'react';
import "./Forum.css";
import Question from './Question';

export default class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: props.nickname,
            description: props.description,
        }
    }

    render() {
        return (
            <div className="answer" >
            <div className="photo">
                <img style={{marginLeft: '20px', marginRight: '20px', marginBottom: '20px'}} src={require('./images/user.png').default} height={ 50  } width={ 50}/>
                <div className="user">
                    <h4 className="nickname">{this.state.description}</h4>
                    <h5 className="date">10 March 2021, 05:21 PM</h5>
                </div> 
            </div>
            <div className="discription2">
                {this.state.descrition}
            </div>
            <div className="empty" />
        </div>
        );
    }
}