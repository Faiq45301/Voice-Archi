// App.js
import './App.css'
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login'
import SignUp from './pages/Signup'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import AudioRecorder from './pages/AudioRecorder';
import viewdesign from './pages/viewdesign';
import LoginHeader from './components/Header/LoginHeader';
import Cookies from 'js-cookie';
import Welcome from './pages/Welcome';
import Chat from './pages/Chat';
import ProtectedRoutes from './ProtectedRoutes';
function App() {
  const [log,setLog]=useState(false);
  useEffect(()=>{
    if(Cookies.get('tokken')==='mXJ2HQjRs8HPA0qLqpt4m6Gms7UFAfdSf8d42GgTWZO9tUzFMjX3ZAutytwkc2Ab'){
      setLog(true);
    }
    // eslint-disable-next-line
  },[Cookies.get('tokken')])
  return (
    <div>
      <div className='header-pos'>
        {log?<LoginHeader/>:<Header/>}
      </div>
      <Router>
        <Routes>
          <Route element={<Login/>} path='/Login'/>
         
          <Route element={<SignUp/>} path='/signup'/>
          <Route element={<Home/>} path='/'/>
          <Route element={<AboutUs/>} path='/About'/>
          <Route element={<Contact/>} path='/Contact'/>
          <Route element={<ProtectedRoutes/>}>
            <Route element={<Welcome/>} path='/Welcome'/>
            <Route element={<AudioRecorder/>} path='/create-design'/>
            <Route element={<Chat/>} path='/chat'/>
            
          </Route>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
