import React, { useState } from 'react';
import './SignUp.css'; // Updated CSS file import
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa'; // Importing react icons
import { db } from '../firebase';
import {set,ref} from 'firebase/database';
export default function Signup() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [check,setCheck]=useState(false);

  function CreateAcc()
  {
    if(name&&email&&pass){
      const reference = ref(db,`users/${name}`);
      set(reference,{
        name:name,
        pass:pass,
        email:email
      }).then(()=>{
        alert('Account Created');
        window.location.href='/Login'
      }).catch((err)=>console.log(err));
    }
    else{
      alert("Fill All Fields!")
    }
  }
  return (
    <div className="signup-container-register">
      <div className="signup-left-register">
        <h2 className="signup-title-register">Sign Up</h2>
        <div className="social-icons-register">
          <span className="icon-register"><FaFacebookF /></span> {/* Facebook Icon */}
          <span className="icon-register"><FaGoogle /></span> {/* Google Icon */}
          <span className="icon-register"><FaLinkedinIn /></span> {/* LinkedIn Icon */}
        </div>
        <p>Or sign up using your details</p>
        <form className="signup-form-register" onSubmit={(e)=>{e.preventDefault();CreateAcc();}}>
          <input type="text" placeholder="Name" className="signup-input-register" onChange={(e)=>{setName(e.target.value)}}/>
          <input type="email" placeholder="Email" className="signup-input-register" onChange={(e)=>{setEmail(e.target.value)}}/>
          <input type={check?"text":"password"} placeholder="Password" className="signup-input-register" onChange={(e)=>{setPass(e.target.value)}}/>
          <div style={{display:"flex",gap:10}}>
            <input class="form-check-input" type="checkbox" value={check} id="flexCheckDefault" onChange={()=>{setCheck(!check)}}></input>
            <p style={{fontSize:'small',paddingTop:2}}>{check?"Hide Password":"Show Password"}</p>
          </div>
          <button type="submit" className="signup-btn-register">Sign Up</button>
        </form>
      </div>
      <div className="signup-right-register">
        <h2>Welcome to Voice Archi!</h2>
        <p>Speak. Design. Inspire: Sign Up Today!</p>
        <Link to="/login" className="create-account-btn-register">Already have an account? Sign In</Link>
      </div>
    </div>
  );
}
