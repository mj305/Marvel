import React from 'react';

import Footer from '../components/FooterComponent';
import NavBarComponent from '../components/NavBarComponent';


const LogIn = () => {
  return (
    <>
      <div className="login-page-nav-bar-container" >
          <NavBarComponent/>
      </div>

      <div className="login-page-container">

          <div className="login-page-wrapper">
              <div className="login-page-header" >
                <h1>Welcome Back</h1>
              </div>

              <div className="login-page-form-container" >

                  <form className="new-user-form" method="post" > 
                   <div className="login-page-field-container" >
                      <div className="login-page-form-group" >
                          <label>Email:</label>
                          <input autoFocus="autofocus" autoComplete="email" type="email"/>
                        </div>

                        <div className="login-page-form-group">
                          <label>Password:</label>
                          <input autoComplete="current-password" className="" />
                        </div> 

                        <div className="remember-me">
                          <input className="form-check-input" type="checkbox" value="1" />
                          <label>Remember Me</label>
                        </div>
                   </div>

                    <div className="login-page-form-group">
                      <div className="login-button-wrapper" >
                        <button className="login-button">
                          <input className="login-input" type="submit"  />
                        </button>
                      </div>
                    </div>

                    <div className="login-page-form-group" className="login-page-signup-button-wrapper">
                      <a href="./SignUp.js" >Sign-Up</a>
                      <br/>
                      <a href="./ForgotPassword.js" >Forgot your password?</a> 
                    </div>
                  </form>

              </div>
          </div>

      </div>

      <div className="login-page-footer-container" >
        <Footer/>
      </div>
    </>
  )
}

export default LogIn