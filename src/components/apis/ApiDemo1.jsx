import axios from "axios";
import React, { useState } from "react";
import { use } from "react";
import { CustomLoder } from "../CustomLoder";

export const ApiDemo1 = () => {

    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const getUsers = async()=>{

        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log(res)//axios object
        console.log(res.data)//data -->api data
        console.log(res.data.message)
        setmessage(res.data.message)
        console.log(res.data.data)
        setusers(res.data.data)

    }
    const deleteUser =async(id)=>{

      setisLoading(true)
      const res  = await axios.delete("https://node5.onrender.com/user/user/"+id)
      setisLoading(false)
      console.log(res)
      if(res.status===204){
        alert("user deleted successfully..")
        getUsers()

      }
      
    }
  return (
    <div style={{ textAlign: "center" }}>
      {
        isLoading && <CustomLoder/>
      }
      <h1>API DEMO 1</h1>
      <button onClick={()=>{getUsers()}}>GET</button>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>AGE</th>
            <th>STATUS</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users?.map((user)=>{
              return<tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.isActive ?"Active" :"Not Active"}</td>
                <td>
                  <button onClick={()=>{deleteUser(user._id)}}>DELETE</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
};
