import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'

function Welcome() {
    const [name,setName] = useState('');
    useEffect(()=>{
        setName(Cookies.get('name'));
    },[])
  return (
    <div>
        Welcome
        {name}
    </div>

  )
}

export default Welcome