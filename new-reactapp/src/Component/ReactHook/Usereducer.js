// import React, { useReducer } from 'react'
// const initialState = 0;
// const reducer = (state,action)=>{
//     switch(action){
//         case 'Increment':
//            return state + 1
//             case 'Decrement':
//               return state - state/2
//                 case 'Multiplication':
//                 return state*2
//                 default:
//                     return state
// }
// }
// function Usereducer (){
//     const [count ,dispatch]= useReducer(reducer,initialState)

//     return(
//         <div>
//          <h1> useReduce Hook</h1>
//          <h2>Count: {count}</h2>
//          <button onClick={()=>dispatch('Increment')}>Increment</button>
//          <button onClick={()=>dispatch('Decrement')}>Decrement</button>
//          <button onClick={()=>dispatch('Multiplication')}>Multiplication</button>
//         </div>
//     )

// }
// export default Usereducer




import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state,action)=>{

    switch(action){
        case 'incrementC':
            return state+1
        case 'decrementC':
            return state - state/2
        case "multiplication":
            return state * 10
        default:
        return state
            
    }

}


const Usereducer = () => {
   const [count,dispatch]= useReducer(reducer ,initialState)
  return (
    <div>
      <h1> This is useReducer example</h1>
      <h2>Counter : {count}</h2>
      <button onClick={()=> dispatch('incrementC')}> IncreCount</button>
      <button onClick={()=> dispatch('decrementC')}> Decrement</button>
      <button onClick={()=> dispatch('multiplication')}> Multiplictaion</button>

    </div>
  )
}

export default Usereducer
