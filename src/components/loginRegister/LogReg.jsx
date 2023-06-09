import React, { useState } from 'react'
import './LogReg.css'
import Header from '../Header/Header'
import LoginForm from '../forms/Login'
import RegisterForm from '../forms/Register'

function LogReg() {

  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
    console.log("hello");
  }

  const handleLoginClick = () => {
    setShowRegisterForm(false);
  }

  return (
    <>
        <Header></Header>
        <div className='LogReg_body'>
          <div className="LogReg_content">
            <img src="images/Lords_bank.png" alt=""/>
            <p className="con_1">Lords Bank</p>
            <p className="con_2">Your Dreams Matter to Us</p>
            <p className="con_3"> Choose Lords Bank - Your Gateway to Financial Excellence!</p>
          </div>
          <div className="forms">
            {showRegisterForm ? (
              <RegisterForm onLoginClick={handleLoginClick}></RegisterForm>
            ) : (
              <LoginForm onRegisterClick={handleRegisterClick}></LoginForm>
            )}
          </div>
        </div>
        
    </>
    
  )
}

export default LogReg