import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

import Footer from '../components/FooterComponent';
import NavBarComponent from '../components/NavBarComponent';
import axios from 'axios';


const LogIn = () => {
  const history = useHistory();

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
      axios({
        method: "post",
        url: "http://localhost:4000/signIn",
        data,
      }) .then((result) => {
        console.log(result)
        if(result.data.token) {
          toast(result.data.message)
          localStorage.setItem("token", result.data.token)
          history.push("/allcharacters")
        } else {
          toast(result.data.message)
        }
      }).catch((error) => {
        console.log(error)
        toast("Ups... Something went wrong!")
      })
  }


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

                  <form onSubmit={handleSubmit(onSubmit)} className="new-user-form" method="post" > 
                   <div className="login-page-field-container" >
                   <div className="login-up-page-form-group" >
                      <label>Email</label>
                      <input name="email" autoFocus="autofocus" ref={register({ required: true })} type="email"/>
                    </div>
                    {errors.email && <span>This field is required</span>}

                    <div className="login-up-page-form-group" >
                      <label>Password</label>
                        <input className="" name="password" type="password" ref={register({ required: true })}/>
                        <p>(what is the condition for the password?)</p>
                    </div> 
                    {errors.password && <span>This field is required</span>}
                   </div>

                      <div className="remember-me">
                          <input className="checkbox" type="checkbox" value="1" />
                          <label>Remember Me</label>
                      </div>

                    <div>
                      <div className="login-button-wrapper" >
                        <button className="login-button" type="submit">
                          Submit
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