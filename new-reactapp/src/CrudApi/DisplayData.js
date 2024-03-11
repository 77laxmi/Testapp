import React from 'react'
import { API } from './Const'
import '../App.css'


const DisplayData = ({empList ,setUpdate ,setEmployee ,setEdit}) => {
	const handleDelete = async(id)=>{
		const resp = await fetch (`${API}/${id}`,{
			method:'DELETE',
			headers:{
				"content-type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
		})
		if(resp.status === 200){
			alert('Deleted Employee Data' )

			setUpdate((value)=> !value)
		}

	}
	
  return(
    <div>
     
      <h1>Data received from an API</h1>
      <table>
      
	  <tr>
		<th>ID</th>
		<th>Name</th>
		<th>Designation</th>
		<th>City</th>
		<th>Salary</th>
		<th>Edit/Delete</th>
	  </tr>
        {empList.map((user) => (
					<tr>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.designation}</td>
						<td>{user.city}</td>
						<td>{user.salary}</td>
						<td>
							<button onClick={() => {setEmployee(user); setEdit(true)}}>Edit</button>
							<button onClick={()=>{handleDelete(user.id)} }>Delete</button>
						</td>
					</tr>
				))}
      </table>
    </div>
  )
}

export default DisplayData
