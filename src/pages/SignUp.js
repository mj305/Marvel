import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';

import Footer from '../components/FooterComponent';
import NavBarComponent from '../components/NavBarComponent';
import ForgotPassword from './ForgotPassword';

const SignUp = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    axios({
      method: "post",
      url: "http://localhost:4000/signUp",
      data,
    }).then((result) => {
      console.log(result)
      toast(result.data.message)
    }).catch((error) => {
      console.log(error)
    })
  };



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
            
              <form onSubmit={handleSubmit(onSubmit)} className="new-user-form" > 
                   <div className="sign-up-page-form-group" >
                      <label>Name</label>
                      <input name="name" autoFocus="autofocus" ref={register({ required: true })} type="text"/>
                    </div>
                    {errors.name && <span>This field is required</span>}

                    <div className="sign-up-page-form-group" >
                      <label>Email</label>
                      <input name="email" autoFocus="autofocus" ref={register({ required: true })} type="email"/>
                    </div>
                    {errors.email && <span>This field is required</span>}

                    <div className="sign-up-page-form-group" >
                      <label>Password</label>
                        <input className="" name="password" type="password" ref={register({ required: true })}/>
                        <p>(what is the condition for the password?)</p>
                    </div> 
                    {errors.password && <span>This field is required</span>}

                    <div  className="sign-up-page-form-group" >
                      <label>Password Confirmation</label>
                      <input type="password" name="passwordConfirmation" />
                    </div>

                    <div className="sign-up-page-form-group">
                      <div className="sign-up-button-wrapper" >
                        <button type="submit" className="sign-up-button">
                          Submit
                        </button>
                      </div>
                    </div>

                    <div className="sign-up-page-log-in-button-wrapper">
                      <Link to="/login" >Login </Link>
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