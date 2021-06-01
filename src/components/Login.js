import React, {Component, useState, useEffect} from "react";
import './Login.css';
import Axios from "axios"



function Login (){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailRegister, setEmailR] = useState("");
    const [passwordRegister, setPasswordR] = useState("");
    const [password2Register, setPassword2R] = useState("");
    const [nickname, setNickname] = useState("");

    const submitData = (e) => {
        e.preventDefault()
        console.log("im here")
        console.log(email)
        console.log(password)
        Axios.post('http://localhost:8080/plants/login/account', {
            "email": email,
            "password": password,
        })
        .then((response) => {
            window.emailGlobal = "email";
            console.log("good");
            window.location.href = "http://localhost:3000/account";
          })
        .catch((error) => {
            console.log("wrong data")
          })
        
    }

//context

    return (
        <form style={{ fontFamily: 'Courier New'}}>
            <h3 className = "m-3 d-flex justify-content-center" style={{ fontFamily: 'Courier New', fontWeight: 'bold'}}>
                Join to our Plant-Lowers community!
            </h3>
            <div id="container">
                <div className="column">
                    <div className="box">
                        Email
                        <input type="Email" className="form-control" placeholder="Email" name="email" 
                            onChange={(e)=>{ setEmail(e.target.value)}}/>   
                    </div>
                    <div className="box">
                        Password
                        <input type="password" className="form-control" placeholder="Password" name="password" 
                            onChange={(e)=>{ setPassword(e.target.value)}}/>
                    </div>
                    <button style={{marginTop: '30px'}} type="submit" className="btn btn-success btn-lg btn-block" 
                        onClick={(e) => submitData(e)}>Sign in</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="http://localhost:3000/account">password?</a>
                    </p>
                </div>
  
            </div>
            <p className="register"><a href="http://localhost:3000/register">register</a></p>

        </form>
    );
}

export default Login;