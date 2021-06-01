import React, {Component, useState, useEffect} from "react";
import './Login.css';
import Axios from "axios"



function Register (){

    const [emailRegister, setEmailR] = useState("");
    const [passwordRegister, setPasswordR] = useState("");
    const [password2Register, setPassword2R] = useState("");
    const [nickname, setNickname] = useState("");

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
            <p className="register"><a href="http://localhost:3000/login">login</a></p>


        </form>
    );
}

export default Register;