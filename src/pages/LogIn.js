import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

import NavBarComponent from '../components/NavBarComponent';

import '../styles/LogIn.css';


const LogIn = () => {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_DB_URL}/signIn`,
        data,
      }).then((result) => {
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

            <div className="col-md-12">
              <div className="row">
                <div className="login-page-container">
                    <div className="col-md-6">
                      <div className="login-page-wrapper">

                          <div className="login-page-header" >
                           <h1>Welcome Back</h1>
                          </div>

                          <div className="login-page-form-container" >
                            <form onSubmit={handleSubmit(onSubmit)} className="new-user-form" method="post" >
                          <div className="login-page-field-container" >

                          <div>
                            <label >Email *</label>
                            <input className="login-labels form-control"  name="email" autoFocus="autofocus" ref={register({ required: true })} type="email"/>
                          </div>
                          {errors.email && <span>This field is required</span>}

                          <div >
                            <label >Password *</label>
                            <input className="login-labels form-control" name="password" type="password" ref={register({ required: true })}/>
                            </div>
                            {errors.password && <span>This field is required</span>}
                          </div>

                          <div>
                            <div className="login-button-wrapper" >
                              <button className="login-button" type="submit"> Login </button>
                            </div>
                          </div>

                          <div className="login-page-form-group  login-page-signup-button-wrapper" >
                            <a href="./SignUp.js" >SignUp</a>
                              <br/>
                            <a href="./ForgotPassword" >Forgot your password?</a>
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

export default LogIn
