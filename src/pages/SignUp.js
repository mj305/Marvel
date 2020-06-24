import React from 'react';

import Footer from '../components/FooterComponent';
import NavBarComponent from '../components/NavBarComponent';

const SignUp = () => {
  return (
    <>
      <div>
          <NavBarComponent/>
      </div>


        <div className="sign-up-page-container">

            <div className="sign-up-page-wrapper" >
              <h1>Sign-Up</h1>
            </div>
            
            <div className="sign-up-page-form-group" >

              <form className="new-user-form" method="post" > 
                    <div className="sign-up-page-form-group" >
                      <label>Email</label>
                      <input autoFocus="autofocus" autoComplete="email" type="email"/>
                    </div>

                    <div className="sign-up-page-form-group" >
                      <label>Password</label>
                        <input autoComplete="current-password" className="" />
                        <p>(what is the condition for the password?)</p>
                    </div> 

                    <div  className="sign-up-page-form-group" >
                      <label>Password Confirmation</label>
                      <input autoComplete="current-password" type="password" />
                    </div>

                    <div className="sign-up-page-form-group">
                      <div className="sign-up-button-wrapper" >
                        <button className="sign-up-button">
                          <input type="submit"  />
                        </button>
                      </div>
                    </div>

                    <div className="sign-up-page-log-in-button-wrapper">
                      <a href="./LogIn.js" >Login</a>
                    </div>
                </form>

            </div>

        </div>


      <div className="sign-up-page-footer" >
        <Footer/>
      </div>
    </>
  )
}

export default SignUp