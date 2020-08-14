import React from 'react';
import axios from 'axios';
import {useHistory, useParams } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

import NavBarComponent from '../components/NavBarComponent';


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
        <div>
          <NavBarComponent user={props.user} />
        </div>
            <div className="reset-password-page-container" >

                <div className="reset-password-page-wrapper">
                    <div className="reset-password-header-wrapper">
                      <h1 className="reset-password-header">Enter New Password</h1>
                    </div>

                    <div className="reset-password-form-container">
                        <form onSubmit={handleSubmit(onSubmit)} >

                            <div className="reset-password-page-form-group" >
                                <label>Password *</label>
                                <input className="" name="password" type="password" ref={register({ required: true })}/>
                                <p>(what is the condition for the password?)</p>
                            </div>
                            {errors.password && <span>This field is required</span>}

                            <div  className="reset-password-page-form-group" >
                                <label>Password Confirmation *</label>
                                <input type="password" name="passwordConfirmation" />
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
    </>
  ) 
}

export default ResetPassword
