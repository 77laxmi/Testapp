import React, { useEffect, useState } from 'react'
import { API, EMPDATA } from './Const'
import DisplayData from './DisplayData'
import UpdateData from './UpdateData'

const Getdata = () => {
    const [empList , setEmpList] = useState([])
    const [employee ,setEmployee] = useState(EMPDATA)
    const[update,setUpdate] = useState(false)
    const [edit ,setEdit] = useState(false)

    const getData = async()=>{
        const response = await fetch(API)
        const data = await response.json()
        setEmpList(data)

    }

    useEffect(()=>{
        getData()
    } ,[update])
  return (
    // <h1> CRUD with API</h1>
    <div className = 'main-container'>
      <UpdateData employee={employee} setEmployee = {setEmployee} setUpdate={setUpdate} edit = {edit} setEdit = {setEdit}/>
      <DisplayData empList = {empList} setEmployee= {setEmployee} setUpdate = {setUpdate} setEdit={setEdit}/>
    </div>
  )
}

export default Getdata
