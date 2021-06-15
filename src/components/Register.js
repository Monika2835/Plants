import React, {Component, useState, useEffect} from "react";
import './Login.css';
import Axios from "axios"



function Register (){

    const [emailRegister, setEmailR] = useState("");
    const [passwordRegister, setPasswordR] = useState("");
    const [password2Register, setPassword2R] = useState("");
    const [nickname, setNickname] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const register = (e) => {
        e.preventDefault()
        console.log("im here")
        console.log(emailRegister)
        console.log(passwordRegister)
        console.log(nickname)


        Axios.post('http://localhost:8080/plants/register', {
        "firstName": firstName,
        "lastName": lastName,
        "nickname": nickname,
        "email": emailRegister,
        "password": passwordRegister,
        "userType": "user",})
            .then((response) => {
                localStorage.setItem('email', emailRegister);
                window.location.href = "http://localhost:3000/account";
            })
            .catch((error) => {
                console.log({error})
            })    
    }

    return (
        <form style={{ fontFamily: 'Courier New'}}>
            <h3 className = "m-3 d-flex justify-content-center" style={{ fontFamily: 'Courier New', fontWeight: 'bold'}}>
                Join to our Plant-Lowers community!
            </h3>
            <div id="container">
                <div className="column">
                    <div>
                        First Name
                        <input type="Name" className="form-control" placeholder="First Name" onChange={(e)=>{ setFirstName(e.target.value)}}/>
                    </div>
                    <div>
                        Last Name
                            <input type="Name" className="form-control" placeholder="Last Name" onChange={(e)=>{ setLastName(e.target.value)}}/>
                    </div>
                    <div>
                        Email
                        <input type="Email" className="form-control" placeholder="Email" onChange={(e)=>{ setEmailR(e.target.value)}}/>
                    </div>
                    <div>
                        Nickname
                            <input type="Nickname" className="form-control" placeholder="Nickname" onChange={(e)=>{ setNickname(e.target.value)}}/>
                    </div>
                    <div>
                        Password
                        <input type="password" className="form-control" placeholder="Password" onChange={(e)=>{ setPasswordR(e.target.value)}}/>
                    </div>
                    <div>
                        Repeat Password
                        <input type="password" className="form-control" placeholder="Password" onChange={(e)=>{ setPassword2R(e.target.value)}}/>
                    </div>
                    <button style={{marginTop: '30px'}} type="submit" className="btn btn-success btn-lg btn-block" onClick={(e) => register(e)}>Sign Up</button>
                </div>
                <p className="register">Do you have the account already? <a href="http://localhost:3000/login">Login.</a></p>
                <div class="empty"></div>
            </div>


        </form>
    );
}

export default Register;