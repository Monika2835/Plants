import React, { Component } from 'react';


class Inspirations extends Component {
    render() {
        return (
            <div>
                <img style={{marginRight: '20px', marginBottom: '20px', marginTop: '20px'}} src={require('./images/flowers.jfif').default} height={ 200} width={ 263}/>
                <img style={{marginRight: '20px', marginBottom: '20px', marginTop: '20px'}} src={require('./images/plant1.jpg').default} height={ 200} width={ 263}/>
                <img style={{marginRight: '20px', marginBottom: '20px', marginTop: '20px'}} src={require('./images/plant2.jpg').default} height={ 200} width={ 263}/>
                <img style={{marginBottom: '20px', marginTop: '20px'}} src={require('./images/plant3.jpg').default} height={ 200} width={ 260}/>
                <img style={{marginRight: '20px', marginBottom: '20px'}} src={require('./images/plant11.jpg').default} height={ 200} width={ 263}/>
                <img style={{marginRight: '20px', marginBottom: '20px'}} src={require('./images/dog.jpg').default} height={ 200} width={ 263}/>
                <img style={{marginRight: '20px', marginBottom: '20px'}} src={require('./images/kwiaty.jpg').default} height={ 200} width={ 263}/>
                <img style={{marginBottom: '20px'}} src={require('./images/flowers.jfif').default} height={ 200} width={ 260}/>
                <img style={{marginRight: '20px', marginBottom: '20px'}} src={require('./images/plant1.jpg').default} height={ 200} width={ 263}/>
                <img style={{marginRight: '20px', marginBottom: '20px'}} src={require('./images/plant2.jpg').default} height={ 200} width={ 263}/>
                <img style={{marginRight: '20px', marginBottom: '20px'}} src={require('./images/plant3.jpg').default} height={ 200} width={ 263}/>
                <img style={{marginBottom: '20px'}} src={require('./images/plant11.jpg').default} height={ 200} width={ 260}/>
            </div>
        );
    }
}

export default Inspirations;