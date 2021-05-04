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

    const submitData = () => {
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

    const register = () => {
        console.log("im here")
        console.log(emailRegister)
        console.log(passwordRegister)
        console.log(nickname)

        if(passwordRegister == password2Register){
            Axios.post('http://localhost:8080/plants/register', {
            "nickname": nickname,
            "email": emailRegister,
            "password": passwordRegister,
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
        
        
    }

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
                        onClick={submitData()}>Sign in</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="http://localhost:3000/account">password?</a>
                    </p>
                </div>
                <div className="column">
                    <div className="box">
                        Email
                        <input type="Email" className="form-control" placeholder="Email" onChange={(e)=>{ setEmailR(e.target.value)}}/>
                    </div>
                    <div className="box">
                        Nickname
                            <input type="Nickname" className="form-control" placeholder="Nickname" onChange={(e)=>{ setNickname(e.target.value)}}/>
                    </div>
                    <div className="box">
                        Password
                        <input type="password" className="form-control" placeholder="Password" onChange={(e)=>{ setPasswordR(e.target.value)}}/>
                    </div>
                    <div className="box">
                        Reapat Password
                        <input type="password" className="form-control" placeholder="Password" onChange={(e)=>{ setPassword2R(e.target.value)}}/>
                    </div>
                    <button style={{marginTop: '30px'}} type="submit" className="btn btn-success btn-lg btn-block" onClick={register()}>Sign Up</button>
                </div>
                <div class="empty"></div>
            </div>
            

        </form>
    );
}

export default Login;