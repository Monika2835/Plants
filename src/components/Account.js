import React, { Component, useContext, useEffect, useState } from 'react';
import { UserContext } from "./UserContext";
import Axios from "axios";

function Account (){
  //const {user, setUser} = useContext(UserContext);
  const [user, setUser] = useState("");
  
  const getUser = () => {
    const email = localStorage.getItem('email');
    console.log(email);
    Axios.get(`http://localhost:8080/plants/get/userbyemail/${email}`)
        .then(response => {
          console.log(response);
          const data = response.data[0];
          setUser(data);
          localStorage.setItem('userId', user.idUser);
          console.log(user);
        })
        .catch(error => console.error(`Error:  ${error}`));
  }


  useEffect(() => {
    getUser();
  }, []);


  return (
    <div className="container light-style flex-grow-1 container-p-y">
      <div className="col-md-9" style={{ fontFamily: 'Courier New'}}>
        <div className="tab-content">
          <div className="tab-pane fade active show" id="account-general">
            {/* <div className="card-body media align-items-center">
              <img src={require('./images/user.png').default} height={ 210} width={ 210} alt="" class="d-block ui-w-80"/>
              <div className="media-body ml-4">
                <label className="btn btn-outline-primary">
                  Upload new photo
                  <input type="file" className="account-settings-fileinput"/>
                </label> &nbsp;
                <a href="http://localhost:3000/password" className="btn btn btn-success" role="button">Reset</a>

                <div style={{ fontFamily: 'Courier New'}} className="text-dark small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
              </div>
            </div>
            <hr className="border-light m-0"/> */}


            
            <div className="card-body" style={{ fontFamily: 'Courier New'}}>

              <h3 style={{ fontFamily: 'Courier New', fontWeight: 'bold', marginTop: '20px' }}>
                Account settings
              </h3>

              Hello there! On that page you can check your personal data. I hope you have great day, remeber that your amazing and your plants need your love! :)

              <div className="form-group">
                <label className="form-label">First name: {user.firstName}</label>
              </div>
              <div className="form-group">
                <label className="form-label">Last name:  {user.lastName}</label>
              </div>
              <div className="form-group">
                  <label className="form-label">Nickname: {user.nickname}</label>
              </div>
              <div className="form-group">
                <label className="form-label">E-mail: {user.email}</label>
              </div>
              <button type="button" class="btn btn-success" onClick ={(e) => {
                localStorage.setItem('userId', -1);
                window.location.href = `http://localhost:3000`;
              }}>Log out</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="text-right mt-3" style={{ fontFamily: 'Courier New'}}>
        <button type="button" class="btn btn-success">Save changes</button>&nbsp;
        <button type="button" class="btn btn-default">Cancel</button>
      </div>       */}
    </div>
  );
    
}

export default Account;
