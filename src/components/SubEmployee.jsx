import React, { useContext } from 'react'
import { EmployeeContex } from './EmployeeContex'

export const SubEmployee = () => {
    const {employees} = useContext(EmployeeContex)
  return (
    <div>
        <h1>SUB EMPLOYEE</h1>
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
