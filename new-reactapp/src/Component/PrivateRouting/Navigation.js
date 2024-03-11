import React ,{}from 'react'
import { Link } from 'react-router-dom'
function Navigation() {
  return (
    <div>
        <nv>
       <Link to={'/'}>Home</Link>
       <Link to={'/about'}>About</Link>
       <Link to={'/login'}>Login</Link>
       <Link to={'/dashboard'}>Dashboard</Link>


        </nv>
    </div>
  )
}

export default Navigation