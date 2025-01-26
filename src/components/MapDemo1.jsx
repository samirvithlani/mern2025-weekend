import React from "react";

export const MapDemo1 = () => {
  var employees = [
    {
      id: 101,
      name: "ram",
      age: 23,
      salary: 12000,
    },
    {
      id: 102,
      name: "shyam",
      age: 24,
      salary: 15000,
    },
  ];
  return (
    <div>
      <h1>MAP DEMO</h1>
      {/* {
            employees.map((emp)=>{
                return <li>{emp.id}  {emp.name}  {emp.age}</li>
            })
        } */}
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>SALARY</th>
          </tr>
        </thead>
        <tbody>
            {
                employees.map((emp)=>{
                    return<tr>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.age}</td>
                        {/* <td>{emp.salary}</td> */}
                        {/* <td>
                            <span style={{color:emp.salary>=15000?"red":"green"}}>{emp.salary}</span>
                        </td> */}
                        <td>
                            <span style={{color:emp.salary>=15000 && "red"}}>{emp.salary}</span>
                        </td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  );
};
