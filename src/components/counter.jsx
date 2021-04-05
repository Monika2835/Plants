import React, { Component } from 'react';

class Counter extends Component {
    //state = {}
    render() {
        //React.createElement('div')
        return (
        <div>
            <div
            style={{
                display:"flex",
                justifyContent: "center",
                alignItems: "center"
            }

            }
        >
            <h1>Plants World</h1>
        </div>
            <button>HOME</button>
            <button>BLOG</button>
            <button>INSPIRATIONS</button>
            <button>FORUM</button>
            <button>ABOUT</button>
        </div>
        );
    }
}

export default Counter;