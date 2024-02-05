import React from 'react'
import { Link } from "react-router-dom";
import '../Components/Pages/login.css';

function  Home  () {
  

  return (
    <div className="menu">

        <Link to="/"></Link>
        <div className='loginsignup'>
        <Link to="/login" className="text">
          <div className='loginlink' title='Log into the system'>Login</div>
        </Link>
        <Link to="/signup" className="text">
          <div className='signuplink'>SignUp</div>
        </Link>
        </div>
      </div>
  )
}
export default Home
