import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// class Navigation extends Component {
  function Navigation (){
  
    return (
      <nav>
       <Link to="/">Home</Link>
       <Link to="/aboutus">AboutUs</Link>
       <Link to="/contactus">ContactUs</Link>
       </nav>
    )
  
}
export default Navigation;
