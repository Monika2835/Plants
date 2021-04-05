import React, {Component} from "react";

export default class Login extends Component{
    render(){
        return (
            <form style={{ fontFamily: 'Courier New'}}>
                <h3 className = "m-3 d-flex justify-content-center" style={{ fontFamily: 'Courier New', fontWeight: 'bold'}}>
                    Join to our Plant-Lowers community!
                </h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email"/>
                </div>

                <div className="form group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"/>
                </div>

                <button style={{marginTop: '30px'}} type="submit" className="btn btn-success btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>

                <div className="form-group">
                    <label>Nickname</label>
                    <input type="text" className="form-control" placeholder="Nickname" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

                <div className="form-group">
                    <label>Repeat Password</label>
                    <input type="password" className="form-control" placeholder="Repeat Password" />
                </div>

                <button style={{marginTop: '30px'}} type="submit" className="btn btn-success btn-lg btn-block">Sign Up</button>

            </form>
        );
    }
}