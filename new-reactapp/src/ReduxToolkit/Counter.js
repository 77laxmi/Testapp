
// // -----------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment,decrement,getAsyncNum } from './CounterSlice';

// function Counter() {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();
//   const[input,setInput] = useState()
//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={() => dispatch(increment())}>increment</button>
//       <button onClick={() => dispatch(decrement())}>decrement</button>
//       <input value={input} onChange={(e)=>setInput(e.target.value)}/> 
//       <button onClick={()=>dispatch(getAsyncNum(input))}>Asych</button>
//     </div>
//   );
// }

// export default Counter;

// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import{increment,decrement} from './CounterSlice'

// function Counter() {
//   const count = useSelector((state)=>state.counter.value)
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>dispatch(increment())}> incre</button>
//       <button onClick={()=>dispatch(decrement())}> decre</button>

//     </div>
//   )
// }

// export default Counter




import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './CounterSlice'

function Counter() {

const count = useSelector((state)=>state.counter.value)
const dispatch  = useDispatch()
  return (
    <div>
      <h1>Counter Using Redux Toolkit</h1>
      <h2>{count}</h2>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>

    </div>
  )
}

export default Counter






























