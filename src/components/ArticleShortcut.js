import React from 'react';
import "./ArticleShortcut.css"

export default class ArticleShort extends React.Component {
    constructor(props) {
        super(props);
        localStorage.setItem('userId', localStorage.getItem('userId'));
        const descLength = 200;
        const desc = props.description.substring(0, descLength).lastIndexOf(" ");
        this.state = {
            title: props.title,
            description: props.description,
            shortDescription: props.description.length > descLength ? props.description.substring(0, desc) + '...': props.description,
            blogId: props.blogId
        }
    }

    render() {
        return (
            <div>
                <li className="media">
                <img style={{marginTop: '25px'}} className="mr-3" src={require('./images/dog.jpg').default} height={ 150} width={ 150} alt="Generic placeholder image"/>
                <div className="media-body" style={{fontFamily: 'Courier New'}}>
                    <div>
                        <div className = "title">
                            <h3 style={{fontWeight: "bold"}} className = "m-3 d-flex justify-content-center">{this.state.title}</h3>
                        </div>
                        <div className = "picture" onClick = {(e) => {
                            localStorage.setItem('blogId', this.state.blogId);
                            window.location.href = `http://localhost:3000/editblog`;
                        }}>
                            <img style={{marginTop: '25px'}} className="mr-3" src={require('./images/edit.png').default} height={ 50} width={ 50} alt="Generic placeholder image"/>
                        </div>
                        <div className = "empty"/>
                    </div>
                    <div>
                        <h5 className = "m-3 d-flex justify-content-center">
                            { this.state.shortDescription }
                        </h5>
                    </div>
                    <p className="forgot-password text-right">
                        <a className="text-success" href="#" onClick={(e)=>{ 
                            localStorage.setItem('blogId', this.state.blogId);
                            window.location.href = `http://localhost:3000/article`;
                        }}>read more...</a>
                    </p>
                </div>
                </li>
            </div>
        );
    }
}