import React from 'react';
import './Contact.css'; // Custom CSS file for Contact page
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing react icons
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {

  const [state, handleSubmit] = useForm("mqakzbkl");
  if (state.succeeded) {
    return (<div style={{display:'flex',alignItems:'center',justifyContent:'center',paddingTop:100}}>
      <h3 style={{color:'#1687a7',fontWeight:'bold'}}>Form Submitted Successfully</h3>
    </div>)
  }

  return (
    <div className="contact-container">
      {/* Left side (Contact form) */}
      <div className="contact-form-container">
        <h2 className="contact-title">Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          
          {/* Name input */}
          <input
            type="text"
            name="name" 
            placeholder="Name"
            className="contact-input"
            required 
          />

          {/* Email input */}
          <input
            type="email"
            name="email"  
            placeholder="Email"
            id="email"
            className="contact-input"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors}/>

          {/* Message input */}
          <textarea
            id="message"
            name="message"  
            placeholder="Message"
            className="contact-textarea"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors}/>

          <button type="submit" className="contact-btn" disabled={state.submitting}>
            Send Message
          </button>
        </form>
      </div>

      {/* Right side (Icons) */}
      <div className="contact-info-container">
        <div className="icon-section">
          <FaPhoneAlt className="contact-icon" />
          <p className="contact-info">+123 456 789</p>
        </div>
        <div className="icon-section">
          <FaEnvelope className="contact-icon" />
          <p className="contact-info">info@example.com</p>
        </div>
        <div className="icon-section">
          <FaMapMarkerAlt className="contact-icon" />
          <p className="contact-info">123 Example St, City, Country</p>
        </div>
      </div>
    </div>
  );
}
