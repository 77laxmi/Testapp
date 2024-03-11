import React from 'react'

function CustomInput() {
  return (
    <div>
        <h1> Custom input</h1>
        <input type='text' onChange={(e)=>{console.log(e.target.value)} }></input>
    </div>
  )
}

export default CustomInput
