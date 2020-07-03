import React from 'react';

import Footer from '../components/FooterComponent'
import NavBarComponent from '../components/NavBarComponent'


const ForgotPassword = () => {

  return (
    <>
        <div>
          <NavBarComponent/>
        </div>



            <div className="forgot-password-page-container" >

                <div className="forgot-password-page-wrapper">
                    <div className="forgot-password-header-wrapper">
                      <h1 className="forgot-password-header">Reset Password</h1>
                    </div>

                    <div className="forgot-password-form-container">
                        <form /* onSubmit={handleSubmit(onSubmit)}  */> 

                            <div className="forgot-password-page-form-group" >
                                <label>Email *</label>
                                <input name="email" autoFocus="autofocus" /* ref={register({ required: true })} */ type="email"/>
                            </div>
                           {/*  {errors.email && <span>This field is required</span>} */}

                           

                            <div>
                                <div /* className="forgot-password-button-wrapper"  */>
                                    <button type="submit" className="forgot-password-button"> Reset </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>


        <div className="sign-up-page-footer" >
          <Footer/>
        </div>
    </>
  ) 
}

export default ForgotPassword