import React, { useMemo, useState } from 'react'
import { NumberContext } from './NumberContext'
import { GuessNumber } from './GuessNumber'
import { useToast } from '../hooks/ToasterHook'

export const GenerateNumber = () => {
    const [message, setmessage] = useState("guess Number")
    const [guessedNumbers, setguessedNumbers] = useState([])
    const {success,error} = useToast()
    const randomNo = useMemo(()=>{
        return Math.floor(Math.random()*100)
    },[])
    console.log(randomNo)
    const getInput = (inputValue)=>{
        console.log("input...",inputValue)
        const diff = randomNo - inputValue;
        if(diff>10){
            setguessedNumbers([...guessedNumbers,inputValue])
            setmessage("too high")
        }
        else if(randomNo == inputValue){
            success("number matched...")
            setmessage("number guessed in",)
        }
    }
    
  return (
    <div>
            <NumberContext.Provider value={{getInput}}>
                <GuessNumber></GuessNumber>
            </NumberContext.Provider>
            <button onClick={()=>{success("success")}}>show toast</button>
            {
                message
            }
            {
                guessedNumbers.length + " "+" attemps"
            }
    </div>
  )
}
