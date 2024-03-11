// dom manipulation


import React, { useRef } from 'react'

const UseRef1 = () => {
    const input = useRef()
    const handleChange = ()=>{
        console.warn('function calling...')
        input.current.value = 'Laxmi'    
        input.current.focus();

        // input.current.style.color = 'Blue'

    }

  return (
    <div>
      <h1>This is useRef Hook </h1>
      <input type='text'  ref = {input}></input>
      <button  onClick={handleChange}>Click</button>
    </div>
  )
}

export default UseRef1














// import React ,{useRef}from 'react'

// const UseRef1 = ()=>{
//  const input = useRef(null)

//  const handleChange = ()=>{
//     console.warn('function call');
//     input.current.value = '10'
//     input.current.style.color = 'red'
//     // input.current.focus();
//  }



//     return(

//         <div>
//             <h1>
//                 This is an example of UseRef
//             </h1>
//             <input type='text' ref = {input}></input>
//             <button onClick={handleChange}> Click</button>
            
//         </div>
//     )
// }
// export default UseRef1;