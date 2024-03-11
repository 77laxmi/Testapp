import React, { useEffect, useState } from 'react'
import Update from './Update'
import Read from './Read'
import { API, EMP_DATA } from '../API_CRUD/ConstantData'

const Get = () => {
  const[employeeList,setEmployeeList] = useState([])
  const[employee,setEmployee] = useState(EMP_DATA)
  const getData = async()=>{

    const response = await fetch(API)
    const data  = await response.json()
    setEmployeeList(data)
  }
  useEffect(()=>{
    getData()
  })
  return (
    <div>
      <Read employeeList = {employeeList} setEmployee={setEmployee}/>
      <Update employee={employee} setEmployee={setEmployee}/>
    </div>
  )
}

export default Get