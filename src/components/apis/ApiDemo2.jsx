import axios from 'axios'
import React, { useState } from 'react'
import { CustomLoder } from '../CustomLoder'

export const ApiDemo2 = () => {

    const [isLoading, setisLoading] = useState(false)

    const addUser = async()=>{
 
        const userObj = {
            name:"harsh",
            age:22,
            email:"harsh@gmail.com",
            isActive:true
        }

        setisLoading(true)
        const res = await axios.post("https://node5.onrender.com/user/user",userObj)
        console.log(res)//axios
        console.log(res.data)//api respinse..
        setisLoading(false)
        if(res.status===201){
            alert("user added")
        }

    }
  return (
    <div style={{textAlign:"center"}}>
        {
            isLoading && <CustomLoder/>
        }
        <h1>POST API DEMO </h1>
        <button onClick={()=>{addUser()}}>add</button>
    </div>
  )
}
