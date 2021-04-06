import React, { Component } from 'react';

class Account extends Component {
    render() {
        return (
            <div class="container light-style flex-grow-1 container-p-y">

    <h3 style={{ fontFamily: 'Courier New', fontWeight: 'bold', marginTop: '20px' }}>
      Account settings
    </h3>
        <div class="col-md-9" style={{ fontFamily: 'Courier New'}}>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="account-general">

              <div class="card-body media align-items-center">
                <img src={require('./images/user.png').default} height={ 210} width={ 210} alt="" class="d-block ui-w-80"/>
                <div class="media-body ml-4">
                  <label class="btn btn-outline-primary">
                    Upload new photo
                    <input type="file" class="account-settings-fileinput"/>
                  </label> &nbsp;
                  <a href="http://localhost:3000/password" class="btn btn btn-success" role="button">Reset</a>

                  <div style={{ fontFamily: 'Courier New'}} class="text-dark small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                </div>
              </div>
              <hr class="border-light m-0"/>

              <div class="card-body" style={{ fontFamily: 'Courier New'}}>
                <div class="form-group">
                  <label class="form-label">Nickname</label>
                  <input type="text" class="form-control mb-1" value="user"/>
                </div>
                <div class="form-group">
                  <label class="form-label">E-mail</label>
                  <input type="text" class="form-control mb-1" value="user@gmail.com"/>
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
}

export default Account;
