import React, { useState } from "react";
import './Register.css'

function RegisterForm({onLoginClick}){

    const [userData, setUserData] = useState({firstName : "",
    lastName : "",
    userName :  "",
    email : "",
    password : "",
    confirmPassword : "",
    phoneNumber : ""});

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;

        setUserData((previousFormData) => ({...previousFormData, [name]:value}));

    }

    const handleRegister = (e) => {
        e.preventDefault();

        let error= {};

        const firstNameExp = /^[A-Za-z]+$/;
        const lastNameExp = /^[A-Za-z]+$/;
        const userNameExp = "/^(?=.*[a-z])(?=.*[A-Z])+$/" ;
        const emaiExp = "/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/";
        const [passwordExp, confirmPasswordExp] = "/^(?=.*\d)(?=.*[a-z])(?=.*[\@\#])(?=.*[A-Z]).{8,16}$/";
        const phoneNumberExp = "/[6-9]{1}[0-9]{9}/";
        
        if(!firstNameExp.test(userData.firstName)){
            error.fistName = "Invalid first name";
        }

        if(!lastNameExp.test(userData.lastName)){
            error.lastName = "Invalid last name";
        }

        if(!userNameExp.test(userData.userName)){
            error.userName = "Invalid user name";
        }

        if(!emaiExp.test(userData.email)){
            error.email = "enter valid mail id";
        }

        if(!passwordExp.test(userData.password)){
            error.password = "password must contain altleast one @ or #, uppercase letter, lowercase letter, number";
        }

        if(userData.password !== userData.confirmPassword){
            error.confirmPassword = "password doesn't match";
        }

        if(!phoneNumberExp.test(userData.phoneNumber)){
            error.phoneNumber = "invalid phone number";
        }

        setErrors(error);
        console.log(userData);
        console.log(errors);
    };

    return  <>
    <div className="reg_form">
        <div className="reg">
            <form onSubmit={handleRegister}>
                <div className="form-field-group field-field">
                    <div className="form-group">
                        <span>Register</span>
                    </div>
                </div>

                <div className="form-field-group">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={userData.firstName} onChange={handleChange} placeholder="enter first name" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={userData.lastName} onChange={handleChange} placeholder="enter last name" required/>
                    </div>
                </div>

                <div className="form-field-group">
                    <div className="form-group">
                        <label htmlFor="userName">User Name</label>
                        <input type="text" className="form-control" name="userName" value={userData.userName} onChange={handleChange} placeholder="enter user name" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email-Id</label>
                        <input type="email" className="form-control" name="email" value={userData.email} onChange={handleChange} placeholder="enter email-id" required/>
                    </div>
                </div>
                
                <div className="form-field-group">
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={userData.password} onChange={handleChange}  placeholder="enter password" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm-Password</label>
                        <input type="password" className="form-control" name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} placeholder="re-enter password" required/>
                    </div>
                </div>

                <div className="form-field-group">
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="number" className="form-control" name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} placeholder="enter phone number" required/>
                    </div>
                </div>
                
                <div className="form-field-group field-field">
                    <div className="form-group">
                        <button  className="btn" type="submit" onClick={handleRegister}>Register</button>
                    </div>
                </div>

                <div className="form-field-group field-field">
                    <div className="form-group">
                        <p>Already have an account? Sign in now <a onClick={onLoginClick}>Sign-in</a></p>
                    </div>
                </div>
                
                
                
            </form>
        </div>
    </div>
</>
}

export default RegisterForm;