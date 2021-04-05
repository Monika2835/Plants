import React, { Component } from 'react';

class Home extends Component {
    render() {
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
        </div>
        <img src={require('./images/flowers.jfif').default} height={ 400} width={ 1110}/>
        <h3 style={{ fontFamily: 'Courier New', marginTop: '30px', fontWeight: 'bold' }}>The latest posts</h3>
        </div>
        );
    }
}

export default Home;