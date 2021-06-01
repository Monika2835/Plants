import React, { Component } from 'react';
import emailGlobal from "./Login";

function Account (){


        return (
            <div className="container light-style flex-grow-1 container-p-y">

    <h3 style={{ fontFamily: 'Courier New', fontWeight: 'bold', marginTop: '20px' }}>
      Account settings
    </h3>
        <div className="col-md-9" style={{ fontFamily: 'Courier New'}}>
          <div className="tab-content">
            <div className="tab-pane fade active show" id="account-general">

              <div className="card-body media align-items-center">
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
              <hr className="border-light m-0"/>

              <div className="card-body" style={{ fontFamily: 'Courier New'}}>
                <div className="form-group">
                  <label className="form-label">Nickname</label>
                  <input type="text" className="form-control mb-1" value="user"/>
                </div>
                <div className="form-group">
                  <label className="form-label">E-mail</label>
                  <label className="form-label">{window.emailGlobal}</label>
                  <input type="text" className="form-control mb-1" value={window.emailGlobal}/>
                </div>
              </div>

            </div>
          </div>
        </div>

    <div class="text-right mt-3" style={{ fontFamily: 'Courier New'}}>
      <button type="button" class="btn btn-success">Save changes</button>&nbsp;
      <button type="button" class="btn btn-default">Cancel</button>
    </div>
            
  </div>
        );
    
}

export default Account;
