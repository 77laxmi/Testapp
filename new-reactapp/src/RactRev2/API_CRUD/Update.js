import React from 'react'
import { API, EMP_DATA } from './ConstantData'

const Update = ({employee,setEmployee}) => {

    const handleRegister = async () => {
		const resp = await fetch(API, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				// "Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify(employee),
		});

		if (!resp.ok) {
      alert("Employee data has been created.");
			setEmployee(EMP_DATA);
    //   setUpdate((value)=> !value)
			
		}
	};
   
  return (
    <div onSubmit={(e)=>e.preventDefault()}>
        <form method='post'>
           Name: <input type="text" 
            value={employee.name}
            onChange={(e)=>setEmployee({...employee,name:e.target.value})}/>
           Designation: <input type="text"
            value={employee.designation} 
            onChange={(e)=>setEmployee({...employee,designation:e.target.value})}/>
            City:<input type="text" 
            value={employee.city}
            onChange={(e)=>setEmployee({...employee,city:e.target.value})} />
            Salary:<input type="number" 
            value={employee.number}
            onChange={(e)=>setEmployee({...employee,salary:e.target.value})}/>
        </form>
        <input type='submit'
        value='Register'
        onClick={handleRegister}/>
    </div>
  )
}

export default Update