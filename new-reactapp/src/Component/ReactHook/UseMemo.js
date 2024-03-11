// useMemo is used to imporove the performance.
// useMemo hook used to return memoized value.
// useMemo hook only runs when any of its dependecies updated.
// we can't call the useMemo in loop or in condition
// syntax  : useMemo(()=>{function},[dependencies])

// import React, { useMemo, useState } from "react";


// function UseMemo (){
//     const [counterOne,setCounterOne] = useState(0);
//     const [counterTwo,setCouterTwo] = useState(0);

//     const incrementOne=()=>{
//         setCounterOne(counterOne+1)

//     }
//     const incrementTwo =()=>{
//         setCouterTwo(counterTwo+1)
//     }
//       const isEven = useMemo(()=>{
//         console.warn('function gets called...')
//         let i = 0;
//         while(i < 200000000) i++
//         return counterOne % 2 === 0

//       },[counterOne])
//     return(<div>
//         <h1>This is UseMemo Hook</h1>
//         <h1> Counter1 : {counterOne} {isEven?'Even':'Odd'}</h1>
//         <span></span>
//         <h1>Counter2: {counterTwo}</h1>

//         <button onClick={incrementOne}>IncreCountOne</button>
//         <button onClick={incrementTwo}>IncreCountTwo</button>
//     </div>)

// }
// export default UseMemo;
 
// useMemo is used to improve the performance of our application 
// return memoized value 
// syntax : useMemo(()=> {},[])
 import React, { useMemo, useState } from 'react'

 function UseMemo (){
  const[count1,setCount1]= useState(0)
  const[count2,setCount2] = useState(0)


  const increCount1=()=>{
    setCount1(count1+1)
  }

  const increCount2=()=>{
    setCount2(count2+1)
  }
   const isEven = useMemo(()=>{
    let i = 0;
    while(i<200000000) i++
    return(count1%2===0)

  },[count1])
  return(
    <div>
      <h1>This Is UseMemo</h1>
      <h2>Counter1:{count1}</h2>
      <span>{isEven?'Even':'Odd'}</span>
      <h2>Counter2:{count2}</h2>
      <h2></h2>
      <button onClick={increCount1}>Counter1</button>
      <button onClick={increCount2}>Counter2</button>

    </div>
  )
 }
 export default  UseMemo;