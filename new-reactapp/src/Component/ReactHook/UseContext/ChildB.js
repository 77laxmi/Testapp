import React, { useContext } from 'react'
import ChildC from './ChildC'
import { data3 } from './MainParent'

const ChildB = () => {
   const fullname = useContext(data3)
  return (
    <div>
      <h1>This is ChildB</h1>
      <h2> This is the data we accessed from main Parent: {fullname}</h2>
      <ChildC/>
    </div>
  )
}

export default ChildB
