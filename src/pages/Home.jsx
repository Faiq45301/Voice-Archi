import React from 'react';
import './Home.css';
import {  FaMicrophone, FaCogs, FaDraftingCompass,  FaUserPlus, FaComments } from 'react-icons/fa';
import { Container} from 'react-bootstrap';
import MediaQuery from 'react-responsive';

export default function Home() {
  return (
    <div>
      <MediaQuery minWidth={1025}>
        {/* Background Image Section */}
        <div className="homeImg">
          <button onClick={()=>{window.location.href='/Login'}}>Start Designing Now</button>
        </div>

        {/* Features Section */}
        <div style={{paddingTop:50}}></div>
        <div className="Features">
          <h2 className="Features-heading">Features</h2>
          <p className="Features-subheading">Innovative tools to transform your ideas into reality</p>

          <div className="Features-container">
            {/* Feature Cards */}
            <div className="Feature-card">
              <FaMicrophone className="Feature-icon" />
              <h3>Voice-Driven Design</h3>
              <p>Speak your mind, shape your space.</p>
            </div>
            <div className="Feature-card">
              <FaCogs className="Feature-icon" />
              <h3>Real-Time Constraint Extraction</h3>
              <p>Precision meets innovation in real-time.</p>
            </div>
            <div className="Feature-card">
              <FaDraftingCompass className="Feature-icon" />
              <h3>2D Floor Plan Generation</h3>
              <p>Your ideas, instantly translated to blueprint.</p>
            </div>
          </div>
        </div>
      
        {/* How it works */}
        <div>
          <Container style={{paddingLeft:100,paddingRight:100}}>
            <div className='hiw-head'>
              <h1 style={{fontWeight:'bold'}}>How It Works?</h1>
            </div>
            {/* Create Section */}
            <div style={{paddingTop:50}}></div>
            <div className='hiw-create'>
              <div className='hiw-create-left'>
                <div className='hiw-create-left-cir'>
                  <FaUserPlus style={{color:'white',fontSize:60}}/>
                </div>
              </div>
              <div className='hiw-create-right'>
                <h1 style={{fontWeight:"bold",color:'#1687a7'}}>1.</h1>
                <div style={{paddingLeft:70}}></div>
                <div>
                  <h3>Create An Account</h3>
                  <p>Sign up and join our innovative design community to begin your journey towards creating stunning floor plans.</p>
                </div>
              </div>
            </div>
            {/* speak Section */}
            <div style={{paddingTop:50}}></div>
            <div className='hiw-create2'>
            <div className='hiw-create-right2'>
                <h1 style={{fontWeight:"bold",color:'#1687a7'}}>2.</h1>
                <div style={{paddingLeft:70}}></div>
                <div>
                  <h3>Speak Your Idea</h3>
                  <p>Use our advanced voice interface to verbalize your design concept. Let your imagination flow freely as you describe your dream space.</p>
                </div>
              </div>
              <div className='hiw-create-left2'>
                <div className='hiw-create-left-cir2'>
                  <FaMicrophone style={{color:'white',fontSize:60}}/>
                </div>
              </div>
              
            </div>

            {/* text Section */}
            <div style={{paddingTop:50}}></div>
            <div className='hiw-create'>
              <div className='hiw-create-left'>
                <div className='hiw-create-left-cir'>
                  < FaComments style={{color:'white',fontSize:60}}/>
                </div>
              </div>
              <div className='hiw-create-right'>
                <h1 style={{fontWeight:"bold",color:'#1687a7'}}>3.</h1>
                <div style={{paddingLeft:70}}></div>
                <div>
                  <h3>Voice To Text Conversion</h3>
                  <p>Our cutting-edge system accurately transcribes your spoken ideas into text, ensuring no detail of your vision is lost in translation.</p>
                </div>
              </div>
            </div>
            {/* constraint Section */}
            <div style={{paddingTop:50}}></div>
            <div className='hiw-create2'>
            <div className='hiw-create-right2'>
                <h1 style={{fontWeight:"bold",color:'#1687a7'}}>4.</h1>
                <div style={{paddingLeft:70}}></div>
                <div>
                  <h3>Constraint Extraction</h3>
                  <p>We meticulously analyze your input to extract key design parameters, transforming your ideas into actionable design constraints.</p>
                </div>
              </div>
              <div className='hiw-create-left2'>
                <div className='hiw-create-left-cir2'>
                  <FaCogs style={{color:'white',fontSize:60}}/>
                </div>
              </div>
              
            </div>
            {/* floor Section */}
            <div style={{paddingTop:50}}></div>
            <div className='hiw-create'>
              <div className='hiw-create-left'>
                <div className='hiw-create-left-cir'>
                  <FaDraftingCompass style={{color:'white',fontSize:60}}/>
                </div>
              </div>
              <div className='hiw-create-right'>
                <h1 style={{fontWeight:"bold",color:'#1687a7'}}>5.</h1>
                <div style={{paddingLeft:70}}></div>
                <div>
                  <h3>2D Floor Plan Generation</h3>
                  <p>Watch as your vision comes to life with our instant 2D floor plan generation, tailored precisely to your specifications and design dreams.</p>
                </div>
              </div>
            </div>
          </Container>
          <div style={{paddingTop:500}}></div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1024}>
        {/* Background Image Section */}
        <div className="homeImgM">
          <button>Start Designing Now</button>
        </div>
        <div style={{paddingTop:10}}></div>
        {/* Features Section */}
        <div className="FeaturesM">
          <h2 className="Features-headingM">Features</h2>
          <p className="Features-subheadingM">Innovative tools to transform your ideas into reality</p>

          <div className="Features-containerM">
            {/* Feature Cards */}
            <div className="Feature-cardM">
              <FaMicrophone className="Feature-iconM" />
              <h3>Voice-Driven Design</h3>
              <p>Speak your mind, shape your space.</p>
            </div>
            <div className="Feature-cardM">
              <FaCogs className="Feature-iconM" />
              <h3>Real-Time Constraint Extraction</h3>
              <p>Precision meets innovation in real-time.</p>
            </div>
            <div className="Feature-cardM">
              <FaDraftingCompass className="Feature-iconM" />
              <h3>2D Floor Plan Generation</h3>
              <p>Your ideas, instantly translated to blueprint.</p>
            </div>
          </div>

        </div>
        {/* How it works */}
        <div>
          <Container>
            <div className='hiw-head'>
              <h1 style={{fontWeight:'bold'}}>How It Works?</h1>
            </div>
            {/* Create Section */}
            <div style={{paddingTop:50}}></div>
            <div className='hiw-createM'>
              <div className='hiw-create-cirM'>
                <FaUserPlus style={{color:'white',fontSize:40}}/>
              </div>
              <h3 style={{fontWeight:"bold",color:'#1687a7',paddingTop:20}}>1. Create An Account</h3>
              <div style={{padding:10}}>
                <p style={{textAlign:'justify'}}>Sign up and join our innovative design community to begin your journey towards creating stunning floor plans.</p>
              </div>
            </div>
            {/* speak Section */}
            <div style={{paddingTop:50}}></div>
            <div className='hiw-createM'>
              <div className='hiw-create-cirM'>
                <FaMicrophone style={{color:'white',fontSize:40}}/>
              </div>
              <h3 style={{fontWeight:"bold",color:'#1687a7',paddingTop:20}}>2.Speak Your Idea</h3>
              <div style={{padding:10}}>
                <p style={{textAlign:'justify'}}>Use our advanced voice interface to verbalize your design concept. Let your imagination flow freely as you describe your dream space.</p>
              </div>
            </div>

            {/* text Section */}
            <div style={{paddingTop:50}}></div>
            <div className='hiw-createM'>
              <div className='hiw-create-cirM'>
                <FaComments style={{color:'white',fontSize:40}}/>
              </div>
              <h3 style={{fontWeight:"bold",color:'#1687a7',paddingTop:20}}>3.Voice To Text Conversion</h3>
              <div style={{padding:10}}>
                <p style={{textAlign:'justify'}}>Our cutting-edge system accurately transcribes your spoken ideas into text, ensuring no detail of your vision is lost in translation.</p>
              </div>
            </div>
            {/* constraint Section */}
            <div style={{paddingTop:50}}></div>
            <div className='hiw-createM'>
              <div className='hiw-create-cirM'>
                <FaCogs style={{color:'white',fontSize:40}}/>
              </div>
              <h3 style={{fontWeight:"bold",color:'#1687a7',paddingTop:20}}>4.Constraint Extraction</h3>
              <div style={{padding:10}}>
                <p style={{textAlign:'justify'}}>We meticulously analyze your input to extract key design parameters, transforming your ideas into actionable design constraints.</p>
              </div>
            </div>
            {/* floor Section */}
            <div style={{paddingTop:50}}></div>
            <div className='hiw-createM'>
              <div className='hiw-create-cirM'>
                <FaDraftingCompass style={{color:'white',fontSize:40}}/>
              </div>
              <h3 style={{fontWeight:"bold",color:'#1687a7',paddingTop:20}}>5.2D Floor Plan Generation</h3>
              <div style={{padding:10}}>
                <p style={{textAlign:'justify'}}>Watch as your vision comes to life with our instant 2D floor plan generation, tailored precisely to your specifications and design dreams.</p>
              </div>
            </div>
          </Container>
          
        </div>

      </MediaQuery>
    </div>
    
  );
}
