import React from 'react';
import { Link } from 'react-router-dom';
import "./public/Login.css"
import Webimage from './img/weimg';
function Login() {
  return (
    <div className="login">
        <div className="loginContainer">

      <Link to="/">
          <Webimage className="login_img"/>
      </Link>

       <h1 className="login_head">Log In</h1>
                
                <label className="login_label">Email</label>
                <input className="login_input" type="text" autoComplete="off" />

                <label className="login_label">Password</label>
                <input className="login_input" type="password"  autoComplete="off"/>
               
         
          <div  className="loginbtnContainer">
                    { (
                        <>
                        <button className="loginbtn" >Sign In</button>
                        <Link to="/register">
                        <p className="loginbtnContainer_p">Don't have an acoount ? <span className="loginbtnContainer_pspan" href="register">Sign Up</span></p>
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

export default Login;