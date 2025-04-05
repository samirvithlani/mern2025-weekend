import React from 'react'
import { useState } from 'react'
import { SubEmployee } from './SubEmployee'
import { EmployeeContex } from './EmployeeContex'

export const Employees = () => {
    const [employees, setEmployees] = useState([
        {
            id:1,
            name:"ram",
            age:23,
        },
        {
            id:2,
            name:"shyam",
            age:24,
        }
    ])
  return (
    <div style={{textAlign:"center"}}>
        <h1>Employees</h1>
        {/* <SubEmployee></SubEmployee> */}
        <EmployeeContex.Provider value={{employees,setEmployees}}>
            <SubEmployee></SubEmployee>
        </EmployeeContex.Provider>

    </div>
  )
}

