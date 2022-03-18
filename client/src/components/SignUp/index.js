import React, { Component } from "react";

class SignUp extends Component {
    function () {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label> User Name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered? <a href="#">Sign In...</a>
                </p>
            </form>
        );
    }
}

export default SignUp;