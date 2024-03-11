import React from 'react'
import useCounter from './useCounter'
const Count2 = ()=>{

    const [count ,increment ,decrement] = useCounter(20)
    return(
        <div>
            <h1>This is from custom hook</h1>
            <h2>Counter2 : {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

        </div>
    )
}
export default Count2