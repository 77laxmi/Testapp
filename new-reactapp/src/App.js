// import React from 'react';
// import './App.css';
// import BasicFunctionalComp from './FuncionalCompTypes/BasicFunctionalComp' 
// import ConditionalRebdering from './FuncionalCompTypes/ConditionalRebdering';
// import EventHandling from './FuncionalCompTypes/EventHandling';
// import PropsDestructing from './FuncionalCompTypes/PropsDestructing';
// import CustomInput from './FuncionalCompTypes/CustomInput';

// import Count1 from './Component/ReactHook/CustomHooks/Count1';
// import Getdata from './CrudApi/Getdata';
// import Counter from './ReduxToolkit/Counter';
// import Get from './RactRev2/API_CRUD/Get';


// class App extends React.Component{
//     constructor(){
//       super()
//       this.state = {
//         isLoggedIn: false
//       }
//     }
//      handleToggle=()=>{
//       this.setState({isLoggedIn:!this.state.isLoggedIn})
//      }

//   render(){

  
//   return (
//     <div className="App">
      
//       {/* <BasicFunctionalComp/>
//       <ConditionalRebdering isLoggedIn={this.state.isLoggedIn}/>

//       {!this.state.isLoggedIn ? <EventHandling onClick = {this.handleToggle} lable = 'Log-In'/>:
//       <EventHandling onClick = {this.handleToggle} lable = 'Log-Out'/>} */}
//       {/* <CustomInput/> */}
//       {/* <PropsDestructing name = 'Laxmi'
//       edu = ' BE'
//       city = 'Pune'/>  */}
// {/* <Count1/> */}
//    {/* <Counter/> */}
//    <Get/>
//     </div>
//   );
// }
// }

// export default App;

import React from 'react'
import Counter from './ReduxToolkit/Counter'

function App() {
  return (
    <div>
      <Counter/>
    </div>
  )
}

export default App