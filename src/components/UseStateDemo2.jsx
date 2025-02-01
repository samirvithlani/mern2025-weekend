import React, { useState } from 'react'

export const UseStateDemo2 = () => {
    const [items, setitems] = useState([
        "Apple",
        "Banana",
        "Grapes",
        "Orange",
        "Kiwi",
        "Mango"
    ])
    const addItem =()=>{
        //watermelon
        //var x = items.push("watermelon")
        // var x = [...items,"watermelon"]
        // console.log(x)
        // setitems(x)
        setitems([...items,"watermelon"])
    }
  return (
    <div>
        <h1>USE STATE DEMO 2</h1>
        <h1>MAP...</h1>
        {
            items.map((i)=>{
                return <li>{i}</li>
            })
        }
        <button onClick={()=>{addItem()}}>ADD MORE ITEAM</button>
    </div>
  )
}
