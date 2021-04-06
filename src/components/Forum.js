import React, { Component } from 'react';

class Forum extends Component {
    render() {
        return (
            <div
            style={{
                display:"flex",
                justifyContent: "center",
                alignItems: "center"
            }

            }
        >
            <h3 className = "m-3 d-flex justify-content-center" style={{ fontFamily: 'Courier New'}}>Forum</h3>
        </div>
        );
    }
}

export default Forum;