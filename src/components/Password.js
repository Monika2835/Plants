import React, { Component } from 'react';

class Password extends Component {
    render() {
        return (
            <div className="container light-style flex-grow-1 container-p-y">

    <h4 className="py-3 mb-4" style={{ fontFamily: 'Courier New', fontWeight: 'bold'}}>
      Change Password
    </h4>
        <div className="col-md-9" style={{ fontFamily: 'Courier New'}}>
          <div className="tab-content">
            <div className="tab-pane fade active show" id="password">

              <hr className="border-light m-0"/>

              <div className="card-body">
              <div className="form-group">
                    <label>Current password</label>
                    <input type="email" className="form-control" placeholder="Enter password"/>
                </div>

                <div className="form group">
                    <label>New Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"/>
                </div>

                <div className="form group" style={{ marginTop: '20px'}}>
                    <label>Repeat New Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"/>
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
export default Password;