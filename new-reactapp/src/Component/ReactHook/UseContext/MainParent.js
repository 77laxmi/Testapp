import React, { createContext, useState }  from 'react'
import ChildA  from './ChildA'
const data1  = createContext();
const data2 =  createContext();
const data3 = createContext()

 const MainParent = ()=>{
 const student = {
  rollnumber : '7',
  marks : '77.77%'
     
 }
 const name = 'Laxmi Lokhande'
  return(
    <data1.Provider value = {student.rollnumber}>
      <data2.Provider value = {student.marks}>
        <data3.Provider value = {name}>
      <h1>This is Main Parent</h1>
      <ChildA/>
      </data3.Provider>
      </data2.Provider>
    </data1.Provider>
  )

 }
 export {data1,data2,data3}
 export default MainParent






















// import React, { createContext, useState } from 'react'
// import ChildA from './ChildA'
// const data1 = createContext();
//   const data2 = createContext();

// const MainParent = () => {
//   const [fname ,setFname] = useState('')
//   const [lname,setLname] = useState('')
  

//   const fname = 'Laxmi';
//   const lname = 'Lokhande'

//   return (
//     <data1.Provider value = {fname}>
//       <data2.Provider>
//       <h1>This is Main Parent</h1>
//       <ChildA/>
//       {/* <button onClick={()=>{setFname('Rohini')}}>ChangeName</button> */}
//       </data2.Provider>
//     </data1.Provider>
//   )
// }
 
// export {data1 ,data2}
// export default MainParent
 
