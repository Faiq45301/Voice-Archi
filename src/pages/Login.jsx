import React, { useState } from 'react'
import './AuthForm.css'; // Importing CSS for styling
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa'; // Importing react-icons
import Cookies from 'js-cookie';
import {db} from '../firebase';
import {get,ref} from 'firebase/database';
export default function Login() {
  const [name,setName]=useState("");
  const [pass,setPass]=useState("");
  function SignIn()
  {
    if(name&&pass){
      const reference = ref(db,`users/${name}`);
      get(reference).then((snapshot)=>{
        if(snapshot.exists()){
          if(snapshot.val().pass===pass){
            alert("Logged In");
            Cookies.set('name',name);
            Cookies.set('tokken','mXJ2HQjRs8HPA0qLqpt4m6Gms7UFAfdSf8d42GgTWZO9tUzFMjX3ZAutytwkc2Ab');
            window.location.href='/Welcome';
          }
          else{
            alert("Incorrect Password!");
          }
        }
        else{
          alert("Incorrect Usernae or Password!");
        }
      })
    }
    else{
      alert("Incorrect Username or Password!");
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h2 className="signup-title">Sign in</h2>
        <div className="social-icons">
          <span className="icon"><FaFacebookF /></span>
          <span className="icon"><FaGoogle /></span>
          <span className="icon"><FaLinkedinIn /></span>
        </div>
        <p>Or sign in using E-Mail Address</p>
        <form className="signup-form" onSubmit={(e)=>{e.preventDefault();SignIn()}}>
          <input type="text" placeholder="Username" className="signup-input" onChange={(e)=>{setName(e.target.value)}}/>
          <input type="password" placeholder="Password" className="signup-input" onChange={(e)=>{setPass(e.target.value)}}/>
          <Link to="/forgot-password" className="forgot-password">Forgot your password?</Link>
          <button type="submit" className="signup-btn">Sign In</button>
        </form>
      </div>
      <div className="signup-right">
        <h2>Create Account!</h2>
        <p>Sign up if you still don't have an account ...</p>
        <Link to="/signup" className="create-account-btn">Sign Up</Link>
      </div>
    </div>
  )
}
