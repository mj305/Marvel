import React from 'react';
import axios from 'axios';

import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';

import NavBarComponent from '../components/NavBarComponent'

import '../styles/ForgotPassword.css';


const ForgotPassword = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, event) => {
    axios({
      method: "post",
      url: `${process.env.REACT_APP_DB_URL}/forgotpassword`,
      data,
    }).then((result) => {
      console.log(result)
        toast(result.data.message)
        event.target.reset()
    }).catch((error) => {
      console.log(error)
      toast("Ups... Something went wrong!")
    })
}


  return (
        <>
          <div>
            <NavBarComponent/>
          </div>

            <div className="col-md-12">
                <div className="row">
                    <div className="forgot-password-page-container">
                        <div className="col-md-6">
                            <div className="forgot-password-page-wrapper">
                                <div className="forgot-password-header-wrapper">
                                  <h1 className="forgot-password-header">Reset Password</h1>
                                </div>

                                <div className="forgot-password-form-container">
                                    <form onSubmit={handleSubmit(onSubmit)} >
                                        <div className="forgot-password-page-form-group" >
                                          <label>Email *</label>
                                          <input name="email" class="form-control" autoFocus="autofocus" ref={register({ required: true })} type="email"/>
                                        </div>
                                        {errors.email && <span>This field is required</span>}
                                        
                                        <div>
                                            <div>
                                              <button type="submit" className="forgot-password-button"> Reset </button>
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

export default ForgotPassword
