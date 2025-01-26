import React from 'react'

export const PropDemoSub = (props) => {
    //props = {} object
    //props ={userName:"ram"}
    //props = {userName:"",user:{}}
  return (
    <div>
        <h1>SUB</h1>
        <h1>Name = {props.userName}</h1>
        <h1>Username = {props.user.name}</h1>
        <h1>city = {props.user.city}</h1>
    </div>
  )
}
