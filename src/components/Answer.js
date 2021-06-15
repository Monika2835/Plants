import React from 'react';
import Question from './Question';

export default class Answer extends React.Component {
    constructor(props) {
        super(props);
        localStorage.setItem('userId', localStorage.getItem('userId'));
        this.state = {
            nickname: props.nickname,
            description: props.description,
        }
    }

    render() {
        return (
        <div className="answerQ" >
            <div>
                <div className="photoQ">
                    <img style={{marginLeft: '20px', marginRight: '20px', marginBottom: '20px'}} src={require('./images/user.png').default} height={ 50  } width={ 50}/>
                </div>
                <div className="userQ">
                    <h4 className="nicknameQ">{this.state.nickname}</h4>
                    <h5 className="dateQ">10 March 2021, 05:21 PM</h5>
                </div> 
            </div>
            <div >
                {this.state.description}
            </div>
        </div>
        );
    }
}