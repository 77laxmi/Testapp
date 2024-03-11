 // useState is used for state management in component
 // useState hook allows us to track state in functional component
 // the benifit of using hooks is whenever the state will updated
 // react will re-render the component with its own ,without loading the page
 // useState accepts the initial state and returns
 // 1) The current state
 // 2) The function that updates the state
 // Syntax :  const [state,setState] = useState('')

 import React,{ useState } from "react";


function UseState(){
    const [name ,setName] = useState('Laxmi')
    return (
        <div>
            <h1>This is useState Hook </h1>
            <h2>Name :{name}</h2>
            <input type="text" placeholder="update Your Name" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        </div>
    )

}
export default UseState;




// function UseState () {
//     const[name,setName] = useState('Laxmi')

//     const updateName = (e)=>{
//         const newName = e.target.value
//         setName(newName)

//     }
//     return(
//         <div>
//             <h1>This an exmple of UseState</h1>
//             <h2>{name}</h2>
//             <input type="text" placeholder="enter your Text" value = {name} onChange={updateName}></input>
//         </div>
//     )
// }
// export default UseState



