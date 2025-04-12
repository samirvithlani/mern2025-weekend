import React, { useContext, useState } from 'react'
import { NumberContext } from './NumberContext'

export const GuessNumber = () => {
    const {getInput} = useContext(NumberContext)
    const [input, setinput] = useState(0)
  return (
    <div>
        <input type='text' onChange={(event)=>{setinput(event.target.value)}}></input>
        <button onClick={()=>{getInput(input)}}>guess</button>
    </div>
  )
}
