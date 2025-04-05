import React, { useContext } from 'react'
import { EmployeeContex } from './EmployeeContex'

export const SubEmployee = () => {
    const {employees,setEmployees} = useContext(EmployeeContex)
    const  generateRandomName = () => {

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let name = '';
        for (let i = 0; i < 5; i++) {
            name += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return name;

    }
    const addEmployee = () => {



        setEmployees([...employees,{id:Math.floor(Math.random()*1000),name:generateRandomName(),age:Math.floor(Math.random()*50)}])
    }
  return (
    <div>
        <h1>SUB EMPLOYEE</h1>
        <button onClick={()=>{addEmployee()}}>ADD</button>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((emp) => {
                            return (
                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.age}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    </div>
  )
}
