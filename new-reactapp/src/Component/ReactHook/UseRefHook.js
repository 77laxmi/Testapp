//it creats a mutable variable which will not re-render the components
// used to access the DOM  elements directly
// import React, { useState,useRef, useEffect } from 'react'

// const UseRefHook = () => {
//     const [input,setInput] = useState()
//     const count = useRef(0)
//     // console.log(count)
//     useEffect (()=>{
//     console.log('Component rendering')
//         count.current = count.current + 1
//     })
//   return (
//     <div>
//       <h1>Counter using useRef</h1>
//             <h2>counter : {count.current}</h2>
//       <input type='text' value={input || ''} onChange={(e)=>setInput(e.target.value)}></input>
//     </div>
//   )
// }
// export default UseRefHook ; 


//  avoid re-rendering component
import React, { useState,useEffect, useRef } from 'react'

const UseRefHook = () => {
  const [data,setData] = useState('')
  const count = useRef(0);
  // console.log(count)
  // const [count,setCount] = useState()

   useEffect(()=>{
    // setCount(count+1)
    count.current = count.current + 1

  })


  return (
    <div>
      <h2>useRef hook</h2>
      <input type='text' value={data} onChange={(e)=>setData(e.target.value)}></input>
      <h2>Number of times component gets render : {count.current}</h2>
    </div>
  )
}

export default UseRefHook
