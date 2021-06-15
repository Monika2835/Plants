import React, {Component, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'

const styles = {
    paddingRight: "30px",
    paddingLeft: "30px",
    fontSize: "20px",
    letterSpacing: "4px"
};



function Navigation (){

    const userId = localStorage.getItem('userId'); 

    const getUser = () => {
       // userId = localStorage.getItem('userId');  
        console.log(userId);
    }

    useEffect(() => {
        getUser();
    }, []);

    if(userId > -1) {
        return(
            <div>
                <h1 className = "m-3 d-flex justify-content-center" style={{ fontFamily: 'Courier New', fontWeight: 'bold' }}>
                    Plant World 
                <a href="http://localhost:3000/login" className="btn btn-outline-light" role="button" ><img src={require('./images/user.png').default} height={ 30} width={ 30} /></a>
            </h1>
            <nav className="navbar navbar-expand-sm navbar-light bg-light" data-toggle="affix">
            <div className="mx-auto d-sm-flex d-block flex-sm-nowrap" style={{ fontFamily: 'Courier New' }}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarsExample11">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a  className="nav-link active" href="/" style={styles} >HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/blog" style={styles}>BLOG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/inspirations" style={styles}>INSPIRATIONS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" style={styles} onClick ={(e) => {
                                userId = localStorage.getItem('userId');
                                localStorage.setItem('userId', userId);
                                window.location.href = `http://localhost:3000/forum`;}}>FORUM</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/about" style={styles}>ABOUT</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
        );
    }
    else {
        return(
            <div>
                <h1 className = "m-3 d-flex justify-content-center" style={{ fontFamily: 'Courier New', fontWeight: 'bold' }}>
                    Plant World 
                <a href="http://localhost:3000/login" className="btn btn-outline-light" role="button"><img src={require('./images/user.png').default} height={ 30} width={ 30} /></a>
            </h1>
            <nav className="navbar navbar-expand-sm navbar-light bg-light" data-toggle="affix">
            <div className="mx-auto d-sm-flex d-block flex-sm-nowrap" style={{ fontFamily: 'Courier New' }}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarsExample11">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a  className="nav-link active" href="/" style={styles} >HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/blog" style={styles}>BLOG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/inspirations" style={styles}>INSPIRATIONS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/forum" style={styles}>FORUM</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/about" style={styles}>ABOUT</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
        );
    }
    
}

export default Navigation;