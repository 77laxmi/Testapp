import React from 'react'
import { API,EMPDATA } from './Const'

const UpdateData = ({employee ,setEmployee,setUpdate ,edit ,setEdit}) => {

  const handleUpdate = async()=>{

    const resp = await fetch(`${API}/${employee.id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify(employee),
		});

		if (resp.status === 200) {
      alert("Employee data has updated sccessFully");

			setEmployee(EMPDATA);
			setUpdate((value) => !value);
			setEdit(false)

		}
	


  }

    const handleRegister = async () => {
		const resp = await fetch(API, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify(employee),
		});

		if (resp.status === 201) {
      alert("Employee data has been created.");

			setEmployee(EMPDATA);
      setUpdate((value)=> !value)
			
		}
	};
  return (
    <div className='form' onSubmit={(e)=>{e.preventDefault()}}>
     <h2>Employee Data</h2>
     <form method = 'post'>
        Name : 
        <input 
        type='text' 
        value={employee.name}
        onChange={(e)=> setEmployee({...employee ,name: e.target.value})}/>

        Designation : 
        <input type='text'
         value={employee.designation}
        onChange={(e)=>setEmployee({...employee ,designation:e.target.value})}/>

        City:
        <input type='text'
         value={employee.city} 
         onChange={(e)=>setEmployee({...employee, city : e.target.value})}/>

        Salary : 
        <input type='number' 
        value={employee.salary}
        onChange={(e)=>setEmployee({...employee ,salary:e.target.value})}/>
           
     </form>
     {edit? (
          <input type='submit'
          value="Update"
          onClick={handleUpdate}/>
     ):(
      <input type='submit'
      value= 'Register'
      onClick={handleRegister}
      />
     )}
     
     
    </div>
  )
}

export default UpdateData
