import React,{memo, useEffect} from 'react'

// const Child = () => {
//     console.log('Child is rendering')
//   return (
//     <div>
//       <h1>This is Child Component</h1>
//     </div>
//   )
// }

// // export default memo(Child)
// export default memo(Child);

const Child = 


({ increment }) => {

    console.log('child');

  return (
   <div>
    <p>Child Component</p>
    <button onClick={increment}>Increment count</button>
   </div>
  )
 }
 
 export default Child