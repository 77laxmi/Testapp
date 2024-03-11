import React from 'react'
import { Navigate  } from 'react-router-dom'

function PrivateRoute({ children }) {
  const isAuthenticated = false; // TODO: Implement authentication check here

  if (!isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return children;
}


  // return (
  //   <div>PrivateRoute</div>
  // )


export default PrivateRoute