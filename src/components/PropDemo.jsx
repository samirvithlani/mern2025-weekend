import React from 'react'
import { PropDemoSub } from './PropDemoSub'

export const PropDemo = () => {
    var userName  ="ram"
    var user = {
        name:"amit",
        age:23,
        city:"ahmedabad"
    }
  return (
    <div>
        <h1>PROP DEMO</h1>
        {/* child */}
        <PropDemoSub userName = {userName} user = {user}></PropDemoSub> 
    </div>
  )
}
