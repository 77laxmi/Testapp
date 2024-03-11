import React, { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import PrivateRoute from './Component/Routing/View/PrivateRoute'
import Home from './Component/PrivateRouting/View/Home';
import Login from './Component/PrivateRouting/View/Login';
import Dashboard from './Component/PrivateRouting/View/Dashboard';
import About from './Component/PrivateRouting/View/About';












const App = () => {
  const isAuthenticated = true; // Replace with your authentication logic

  return (
    <BrowserRouter>
    <Routes>
      
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path='/about' component={About}/>
       <Route path='/private' element = {<PrivateRoute
          path="/dashboard"
          component={Dashboard}
          authenticated={isAuthenticated}
        />}
        />
      
    </Routes>
    </BrowserRouter>
  );
};

export default App;










// function App1() {

//   return (
//     <div>
//         <BrowserRouter>
//         <Routes>
//             <Route path='/' Component={Home}/>
//             <Route path='/home' Component={Home}/>
//             <Route path='/contactus' Component={Contact}/>

//       <Route path='/home' element = {<PrivateRoute/>}> 
//                   <Route path='aboutus' Component={About}/>

//       </Route>          
//         </Routes>
        
//         </BrowserRouter>
//         {/* <button onClick={()=>setIsLogged(true)}>Log-In</button>
//         <button onClick={()=>setIsLogged(false)}>Log-Out</button> */}

//     </div>
//   )
// }

// export default App1