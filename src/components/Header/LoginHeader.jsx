import React, { useEffect, useState } from 'react'
import './header.css'
import Logo from '../../assets/voicearchi_logo.png'
import { Container } from 'react-bootstrap'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { HiOutlineMenu } from "react-icons/hi";
import Cookies from 'js-cookie'
import MediaQuery from 'react-responsive'
function LoginHeader() {
  const [log,setLog]=useState(false);
  const [option,setOption] = useState(false);
  useEffect(()=>{
    if(Cookies.get('tokken')==='mXJ2HQjRs8HPA0qLqpt4m6Gms7UFAfdSf8d42GgTWZO9tUzFMjX3ZAutytwkc2Ab'){
      setLog(true);
    }
    // eslint-disable-next-line
  },[])

  function options()
  {
    setOption(!option);
  }
  return (
    <div>
      <MediaQuery minWidth={1025}>
        <Container fluid className='header-pc'>
          <img src={Logo} alt='#' width={60}/>
          <div style={{paddingLeft:70}}></div>
          <div className='header-comp-pc'>
            <h5 onClick={()=>{window.location.href='/create-design'}}>Create Design</h5>
            <h5 onClick={()=>{window.location.href='/view-design'}}>View Design</h5>
            <h5 onClick={()=>{window.location.href='/About'}}>About Us</h5>
          </div>
          <div className='header-pc-login'>
            {log?
            <button onClick={()=>{Cookies.remove('tokken');window.location.href='/Login'}}>Logout</button>:
            <button onClick={()=>{window.location.href='/Login'}}>Login</button>}
          </div>
        </Container>
      </MediaQuery>
      <MediaQuery maxWidth={1024}>
        <Container style={{backgroundColor:'#1687a7'}} fluid>
          <div className='navbar-mobile'>
            <div>
              {option?<HiOutlineMenu style={{fontSize:35,color:'white'}} onClick={options}/>:<HiOutlineMenuAlt1 style={{fontSize:35,color:'white'}} onClick={options}/>}
            </div>
            <div style={{justifyContent:'right',width:'100%',display:'flex'}}>
              <div className='header-pc-login'>
                {log?
                <button onClick={()=>{Cookies.remove('tokken');window.location.href='/Login'}}>Logout</button>:
                <button onClick={()=>{window.location.href='/Login'}}>Login</button>}
              </div>
            </div>
          </div>
          {option?
            <div className='navbar-mobile-menu'>
              <div className='menu-mobile-item' onClick={()=>{window.location.href='/create-design'}}> 
                <h6>Create Design</h6>
              </div>
              <div className='menu-mobile-item-line'></div>
              
              <div className='menu-mobile-item' onClick={()=>{window.location.href='/view-design'}}> 
                <h6>View Design</h6>
              </div>
              <div className='menu-mobile-item-line'></div>
            
              <div className='menu-mobile-item'  onClick={()=>{window.location.href='/About'}}> 
                <h6>About Us</h6>
              </div>
              <div className='menu-mobile-item-line'></div>
            </div>:
            <div></div>
          }
        </Container>
      </MediaQuery>
    </div>
  )
}

export default LoginHeader