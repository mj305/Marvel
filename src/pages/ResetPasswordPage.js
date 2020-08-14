import React from 'react';
import axios from 'axios';
import {useHistory, useParams } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

import NavBarComponent from '../components/NavBarComponent';

import '../styles/ResetPasswordPage.css';


const ResetPassword = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const { token, email } = useParams()
  const history = useHistory()

  const onSubmit = (data) => {
    axios({
      method: "post",
      url: `${process.env.REACT_APP_DB_URL}/resetpassword`,
      data: {email, password: data.password, token},
    }).then((result) => {
      console.log(result)
      toast(result.data.message)
      history.push("/login")
    }).catch((error) => {
      console.log(error)
    })
  };
 
  return (
        <>
          <div className="login-page-nav-bar-container" >
           <NavBarComponent/>
          </div>

            <div className="col-md-12">
                <div className="row">
                  <div className="login-page-container">
                    <div className="col-md-6">

                      <div className="login-page-wrapper">
                          <div className="login-page-header" >
                            <h1 className="reset-password-header">Enter New Password</h1>
                          </div>

                        <div className="login-page-form-container" >
                          <form onSubmit={handleSubmit(onSubmit)} className="new-user-form" method="post" >
                              <div className="login-page-field-container" >
                                  <div>
                                      <label >Password *</label>
                                      <input className="" name="password" type="password" ref={register({ required: true })}/>
                                      <p>(Minimum 8 characters, 1 letter, 1 number, and 1 special character.)</p>
                                  </div>
                                  {errors.password && <span>This field is required</span>}

                                  <div >
                                    <label>Password Confirmation *</label>
                                    <input type="password" name="passwordConfirmation" />
                                  </div>
                                    {errors.password && <span>This field is required</span>}
                               </div>

                            <div>
                              <div className="reset-password-button-wrapper" >
                                <button type="submit" className="reset-password-button"> Reset </button>
                              </div>
                            </div>
                            
                          </form>

                      </div>
                    </div>

                    </div>
                  </div>
                </div>
            </div>
        </>
  ) 
}

export default ResetPassword




