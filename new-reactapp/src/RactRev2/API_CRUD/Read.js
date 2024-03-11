import React from 'react'

 const Read = ({employeeList,setEmployee}) => {
  return (
    <div>
<h1>Data Received from An API</h1>
{employeeList.map((user)=>(
    <table>
        <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>City</th>
            <th>Salary</th>
            <th>EDIT/DELETE</th>
        </tr>
        <tr>
            <td>{user.name}</td>
            <td>{user.designation}</td>
            <td>{user.city}</td>
            <td>{user.salary}</td>
            <td>
                <button onClick={setEmployee}>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    </table>
))}
    </div>
  )
}
export default Read
