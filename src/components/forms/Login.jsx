import React from "react";
import './Login.css'

function LoginForm({onRegisterClick}) {

    const handleLogin = () => {

    }

    return <>
        <div className="login_form">
            <img src="images/profile.png" alt="" width="100px" />
            <div className="login">
                <form action="">
                    <div className="form-group">
                        <label htmlFor="userName">User Name</label>
                        <input type="text" className="form-control" name="userName" placeholder="enter user name or email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control"  name="password" placeholder="enter password"/>
                    </div>
                    <div className="form-group">
                        <button  className="btn" type="button" onClick={handleLogin}>Login</button>
                    </div>
                    <div className="form-group">
                        <p>Don't have an account? create one now   <a  onClick={onRegisterClick}>Register</a></p>
                       
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default LoginForm;