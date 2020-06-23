import React from 'react';

import Footer from '../components/FooterComponent';
import NavBarComponent from '../components/NavBarComponent';


const LogIn = () => {
  return (
    <>
      <div>
          <NavBarComponent/>
      </div>

      <div className="login-page-container">

          <div className="login-page-wrapper" >
            <h1>Welcome Back</h1>
          </div>

          <div className="login-page-form-group" >

              <form className="new-user-form" method="post" > 
                <div className="login-page-form-group" >
                  <label>Email</label>
                  <input autoFocus="autofocus" autoComplete="email" type="email"/>
                </div>

                <div className="login-page-form-group" >
                  <label>Password</label>
                  <input autoComplete="current-password" className="" />
                </div> 

                <div  className="login-page-form-group" >
                  
                  <input className="form-check-input" type="checkbox" value="1" />
                  <label>Remember Me</label>
                </div>

                <div className="login-page-form-group">
                  <div className="login-button-wrapper" >
                    <button className="login-button">
                      <input type="submit"  />
                    </button>
                  </div>
                </div>

                <div className="login-page-signup-button-wrapper">
                  <a href="./SignUp.js" >Sign-Up</a>
                  <br/>
                  <a href="./ForgotPassword.js" >Forgot your password?</a> 
                </div>
              </form>

          </div>

      </div>

      <div>
        <Footer/>
      </div>
    </>
  )
}

export default LogIn