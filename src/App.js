import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from './components/Home'
import Blog from './components/Blog'
import Inspirations from './components/Inspirations'
import Forum from './components/Forum'
import About from './components/About'
import Navigation from './components/Navigation'
import React from 'react'
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <div className="container">

      <h1 className = "m-3 d-flex justify-content-center" style={{ fontFamily: 'Courier New', fontWeight: 'bold' }}>
        Plants World 
        <a href="http://localhost:3000/login" class="btn btn-outline-light" role="button"><img src={require('./components/images/user.png').default} height={ 30} width={ 30}/></a>
      </h1>
      
      

      <Navigation/>

      <Switch>
        <Route path = '/' component = {Home} exact/>
        <Route path = '/blog' component = {Blog} exact/>
        <Route path = '/inspirations' component = {Inspirations} exact/>
        <Route path = '/forum' component = {Forum} exact/>
        <Route path = '/about' component = {About} exact/>
        <Route path = '/login' component = {Login} exact/>
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
