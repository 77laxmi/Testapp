import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'

// const Parent = () => {
//     const [count,setCount] = useState(0)
//     const[todo,setTodo] = useState([])

//     const Increment = ()=>{
//         setCount(count + 1)
//     }
// //     const fun = useMemo(()=>{
// //         console.log('this is Parent function...')
// // },[todo])
//   return (
//     <div>
//       <h1> Usecallback hook</h1>
//       <button  onClick={Increment}>Icrement {count}</button>
//       <Child />

//     </div>
//   )
// }

// export default Parent






const Parent = () => {

  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
 
  const increment = useCallback(() => {
   setCount((prv) => prv + 1)
  }, []);
 
  // useEffect(() => {
  //  const timerID = setInterval(() => {
  //   setTimer(prev => prev + 1)
  //  }, 1000);
 
  //  return () => {
  //   clearInterval(timerID)
  //  }
  // }, [])
 
 
  return (
   <div>
    <p>Counter: {count} </p>
    <p>Timer: {timer} </p>
    <Child increment={increment} />
   </div>
  )
 }
 
 export default Parent;