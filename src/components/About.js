import React, { Component } from 'react';

class About extends Component {
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
        <div class="media">
            <img style={{marginTop: '20px'}} class="mr-3"src={require('./images/plant3.jpg').default} height={ 250} width={ 200} alt="Generic placeholder image"/>
            <div class="media-body">
                <h3 className = "m-3 d-flex justify-content-center" style={{ fontFamily: 'Courier New', fontWeight: 'bold' }}>Let's meet each other!</h3>
                <h5 className = "m-3 d-flex justify-content-center" style={{ fontFamily: 'Courier New'}}>I am a full of energy, young woman, who loves to take care of every kind of plants!</h5>
            </div>
        </div>
        </div>
        <h5 style={{ fontFamily: 'Courier New', marginTop: '20px'}}>For many years I was interested in plants and I was eagerly looking for inspiration about them. More and more of my friends became interested in this topic, so I decided to start a blog where I share my knowledge and receive it myself.</h5>
        <div class="media">
            <img style={{marginTop: '20px'}} class="mr-3"src={require('./images/kwiaty.jpg').default} height={ 350} width={ 400} alt="Generic placeholder image"/>
            <div class="media-body">
                <h5 className = "m-3 d-flex justify-content-center" style={{ fontFamily: 'Courier New'}}>My adventure with plants began with a cactus. At first I doubted that he would survive with me, but nevertheless I managed to cope with this task. I started to challenge myself more and more, and by the time I knew it, my whole house was in flowers. I started buying new varieties and learning how to care for them, although it wasn't always enough for me. Now I want to share my knowledge and grow with you.</h5>
            </div>
        </div>
        </div>
        );
    }
}

export default About;