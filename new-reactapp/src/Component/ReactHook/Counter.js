import React, { useState } from "react"

const Counter = ()=>{
    const [count , setcount] = useState(0);
    console.log(count)
    const incrementC = ()=> {
        setcount(count +1)
    }
    const decrementC = ()=>{
        setcount(count - 1)
    }
      

    return(
        <div>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <button onClick={incrementC}>Incre</button>
            <button onClick={decrementC}>decre</button>
        </div>
    )
}
export default Counter