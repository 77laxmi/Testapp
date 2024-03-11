// useEffect hooks allows you to perform sideEffect in your component
// e.g. fetching data, directly updating DOM,Timres
// useEffect accepts two arguments ,second argument is optional
// useEffect (<function>,<dependencies>)

import React, {useState,useEffect} from "react";

// const UseEffect = ()=>{
//     const[count1,setCount1] = useState(0)
//     const handleCounter1 = ()=>{
//         setCount1(count1+1)

//     }
//     const[count2,setCount2] = useState(0)
//     const handleCounter2 = ()=>{
//         setCount2(count2+1)

//     }
//     useEffect(()=>{
//         console.log('useEffect gets called...')
//                 // alert(`you clicked ${count1} times`)
//     },[count1])

//     return(
//         <div>
//             {/* <h1>you clicked {count} times...</h1> */}
//             <h3>Count: {count1}</h3>
//             <h3>Count: {count2}</h3>
//             <button onClick={handleCounter1}>click1</button>
//             <button onClick={handleCounter2}>click2</button>

//         </div>
//     )
// }
// export default UseEffect;


function UseEffect (){
     const [count1 ,setCount1] = useState(0)
     const [count2 ,setCount2] = useState(0)


 const updateCounter1 = ()=>{
    setCount1(count1+1)

}
const updateCounter2 = ()=>{
    setCount2(count2 - 1)
}
useEffect (()=>{
    console.log('useEffect gets called')

},[])


    return(
     <div>
        <h1>This is an example of UseEffect</h1>
        <h2>counter1 : {count1}</h2>
        <h2> counter2 : {count2}</h2>
        <button onClick={updateCounter1}>Incre</button>
        <button onClick={updateCounter2}>Decre</button>
     </div>
    )
}
export default UseEffect;