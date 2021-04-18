import React, { Component } from 'react';
import "./Forum.css"

class Forum extends Component {
    render() {
        return (
            <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                <div href="./home" className="question">
                    <h3 className = "title">How to take care of Pachira?</h3>
                    <div className="discription">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="counter">
                        10
                    </div>
                    <div className="empty"></div>
                </div>
                
            </div>
        );
    }
}

export default Forum;