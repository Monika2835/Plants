import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}></div>
                <img src={require('./images/background.jpg').default} height={400} width={1110}/>
                <h3 style={{ fontFamily: 'Courier New', marginTop: '30px', fontWeight: 'bold' }}>The latest posts</h3>
                <div> 
                    <div className="recent-posts">
                        <img src={require('./images/dog.jpg').default} height={ 250} width={ 250} className='recent-image'/>
                        <h4>Jakis tytul</h4>
                    </div>
                    <div className="recent-posts">
                        <img src={require('./images/plant1.jpg').default} height={ 250} width={ 250}/>
                        <h4>Jakis tytul</h4>
                    </div>
                    <div className="recent-posts">
                        <img src={require('./images/plant2.jpg').default} height={ 250} width={ 250}/>
                        <h4>Jakis tytul</h4>
                    </div>
                    <div className="recent-posts">
                        <img src={require('./images/plant3.jpg').default} height={ 250} width={ 250}/>
                        <h4>Jakis tytul</h4>
                    </div>
                    <div className="empty"></div>
                </div>
                <div>
                    <h3 style={{ fontFamily: 'Courier New', marginTop: '30px', fontWeight: 'bold' }}>About me</h3>
                    <div id="picture">
                        <img src={require('./images/plant11.jpg').default} height={ 400} width={ 300}/>
                    </div>
                    <div id="description">
                        <h3>I am a full of energy, young woman, who loves to take care of every kind of plants!</h3>
                        <a className="read-more" href="./about">Read more...</a>
                    </div>
                    <div className="empty"></div>
                </div>
            </div>
        );
    }
}

export default Home;