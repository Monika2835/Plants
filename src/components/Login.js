import React, {Component, useState, useEffect, useContext} from "react";
import './Login.css';
import Axios from "axios"
import { UserContext, UserProvider } from "./UserContext";


function Login (){
    const {user, setUser} = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitData = (e) => {
        e.preventDefault()
        console.log(user.email)
        console.log(password)
        Axios.post('http://localhost:8080/plants/login/account', {
            "email": user.email,
            "password": password
         })
        .then((response) => {
            localStorage.setItem('email', response.data.email);
            console.log(localStorage.getItem('email'));
            window.location.href = "http://localhost:3000/account";
          })
        .catch((error) => {
            console.log({error})
          })
        
    }


    return (
        // <UserProvider value = {user, setUser}>
            <form style={{ fontFamily: 'Courier New'}}>
                <h3 className = "m-3 d-flex justify-content-center" style={{ fontFamily: 'Courier New', fontWeight: 'bold'}}>
                    Hello, Plant-Lower! Nice to see you again.
                </h3>
                <div id="container">
                    <div className="column">
                        <div>
                            Email
                            <input type="Email" className="form-control" placeholder="Email" name="email" 
                                onChange={(e)=>{ setUser( {login: true, userId: 0, email: e.target.value})}}/>   
                        </div>
                        <div>
                            Password
                            <input type="password" className="form-control" placeholder="Password" name="password" 
                                onChange={(e)=>{ setPassword(e.target.value)}}/>
                        </div>
                            <button style={{marginTop: '30px'}} type="submit" className="btn btn-success btn-lg btn-block" 
                                onClick={(e) => submitData(e)}>Sign in</button>
                    </div>
                    <p className="register">Don't you have an account yet? <a href="http://localhost:3000/register">Join our community!</a></p>
                </div>
               
            </form>
        // </UserProvider>
    );
}

export default Login;