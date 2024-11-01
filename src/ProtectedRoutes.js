import Cookies from 'js-cookie';
import React from 'react'
import { Outlet, Navigate } from "react-router-dom";
function ProtectedRoutes() {
    let auth = false;
    if(Cookies.get('tokken')==='mXJ2HQjRs8HPA0qLqpt4m6Gms7UFAfdSf8d42GgTWZO9tUzFMjX3ZAutytwkc2Ab'){
        auth=true;
    }
  return (
    auth?<Outlet/>:<Navigate to='/Login'/>
  )
}

export default ProtectedRoutes