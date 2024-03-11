// import React, { useContext } from 'react'
// import { data1,data2 } from './MainParent'

// const ChildC = () => {
//   const dataP1 = useContext(data1);
//   const dataP2 = useContext(data2)
//   return (
//     <div>
//       <h1>This is childC</h1>
//       <h2> My Name is : {dataP1}{dataP2}</h2>
//     </div>
//   )
// }

// export default ChildC





import React, { useContext } from 'react'
import { data1,data2 } from './MainParent'
const ChildC = () => {
  const rollnumber = useContext(data1);
  const marks = useContext(data2)
  return (
    <div>
      <h1>This is ChildC </h1>
      <h2> Student Info: rollnumber = {rollnumber} and marks = {marks}</h2>
    </div>
  )
}

export default ChildC

