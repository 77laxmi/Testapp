import { useState } from "react"


function useCounter(currentValue = 0) {
    const [count,setCount] = useState(currentValue)

    const incrementC = ()=>{
        setCount(count + 1)
    }
    const decrementC = () =>{
        setCount(count - 1)
    }
  return [count,incrementC,decrementC]
}

export default useCounter
