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
import React, { useState } from 'react'
import Login from './components/Login';
import Account from './components/Account';
import Password from './components/Password';
import Register from './components/Register';
import Question from './components/Question';
import Article from './components/Article';
import { UserProvider } from './components/UserContext';
import EditBlog from './components/EditBlog';

function App() {
  const [user, setUser] = useState({login: false, userId: 2})
  return (
    <UserProvider>
    <BrowserRouter>
    <div className="container">
      <Navigation/>

      <Switch>
        <Route path = '/' component = {Home} exact/>
        <Route path = '/blog' component = {Blog} exact/>
        <Route path = '/inspirations' component = {Inspirations} exact/>
        <Route path = '/forum' component = {Forum} exact/>
        <Route path = '/about' component = {About} exact/>
        <Route path = '/login' component = {Login} exact/>
        <Route path = '/account' component = {Account} exact/>
        <Route path = '/password' component = {Password} exact/>
        <Route path = '/register' component = {Register} exact/>
        <Route path = '/question' component = {Question} exact/>
        <Route path = '/article' component = {Article} exact/>
        <Route path = '/editblog' component = {EditBlog} exact/>
      </Switch>
      
    </div>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
