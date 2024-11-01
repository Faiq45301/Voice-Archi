import React from 'react'
import { Container } from 'react-bootstrap'
import './AboutUs.css'
export default function AboutUs() {
  return (
    <div>
      <Container fluid>
        <div style={{textAlign:'center',paddingTop:200,paddingBottom:200}}>
          <h1>About Us</h1>
        </div>
        <div className='missionCont'>
          <div style={{paddingTop:50}}></div>
          <h3 style={{textAlign:'center',fontWeight:'bold',color:'white'}}>Our Mission</h3>
          <div style={{paddingTop:30}}></div>
          <div style={{paddingLeft:50,paddingRight:50,textAlign:'justify',color:'white'}}>
            <p>Our mission is to democratize architectural design, making it accessible, efficient, and enjoyable for all. We strive to streamline the design process, reduce costs, and enhance collaboration between architects, builders, and clients.
</p>
          </div>
        </div>
        <div className='visionCont'>
          <div style={{paddingTop:50}}></div>
          <h3 style={{textAlign:'center',fontWeight:'bold',color:'white'}}>Our Vision</h3>
          <div style={{paddingTop:30}}></div>
          <div style={{paddingLeft:50,paddingRight:50,textAlign:'justify',color:'white'}}>
            <p>Our vision is a future where voice-driven design becomes the standard, enabling rapid, sustainable, and inclusive development of built environments globally. We envision Voice Archi as the catalyst for this transformation, empowering creators, and shaping the future of architecture.
</p>
          </div>
        </div>
        <div className='valCont'>
          <div style={{paddingTop:50}}></div>
          <h3 style={{textAlign:'center',fontWeight:'bold',color:'#1687a7'}}>Our Values</h3>
          <div style={{paddingTop:30}}></div>
          <div style={{paddingLeft:50,paddingRight:50,textAlign:'justify',color:'black'}}>
          <p>
          Our project is a groundbreaking innovation, harnessing cutting-edge technology to reshape the architectural landscape. We aim to break barriers in design and construction, making architecture more accessible to everyone through the power of voice. By fostering seamless collaboration, we enable effective communication and cooperation in real-time, ensuring that all stakeholders can contribute to the creative process. With a strong focus on sustainability, our solution promotes eco-friendly and functional design practices. Ultimately, we strive for excellence, delivering precision and quality in every voice-generated design.
          </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
