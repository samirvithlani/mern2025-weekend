import React, { useState } from 'react'

export const InputHandling = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const nameHandler  = (event)=>{
        //console.log(event.target.value)
        setname(event.target.value)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>INPUT HANDLE</h1>
        <div>
            <label>NAME</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            {name}
        </div>
        <div>
            <label>Email</label>
            <input type='text' onChange={(event)=>{setemail(event.target.value)}}></input>
            {email}
        </div>
    </div>
  )
}
