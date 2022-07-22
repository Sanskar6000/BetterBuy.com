import React from 'react';
import { Link } from 'react-router-dom';
import "./public/Login.css"
import {Webimage} from './img/weimg';
function Register() {
  return (
    <div className="login">
        <div className="registerContainer">

      <Link to="/">
          <Webimage className="login_img"/>
      </Link>

       <h1 className="login_head">Register </h1>
            <label className="login_label">Username</label>
              <input className="login_input" type="text" />

                <label className="login_label">Email</label>
                <input className="login_input" type="text" />

                <label className="login_label">Password</label>
                <input className="login_input" type="password"/>
               
         
          <div  className="loginbtnContainer">
                    { (
                        <>
                        <button className="loginbtn" >Register</button>
                        <Link to="/login">
                        <p className="loginbtnContainer_p">Already have an acoount ? <span className="loginbtnContainer_pspan" href="register">Sign In</span></p>
                        </Link>
                        </>
                    ) 
                }
                </div>
  

       
       

        {/* <button className="loginRegisterButton">Create your Amazon account</button> */}
      
    </div>
    </div>

  );
}

export default Register;