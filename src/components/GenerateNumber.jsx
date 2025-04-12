import React, { useMemo, useState } from 'react'
import { NumberContext } from './NumberContext'
import { GuessNumber } from './GuessNumber'

export const GenerateNumber = () => {
    const [message, setmessage] = useState("guess Number")
    const [guessedNumbers, setguessedNumbers] = useState([])
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
            setmessage("number guessed in",)
        }
    }
    
  return (
    <div>
            <NumberContext.Provider value={{getInput}}>
                <GuessNumber></GuessNumber>
            </NumberContext.Provider>
            {
                message
            }
            {
                guessedNumbers.length + " "+" attemps"
            }
    </div>
  )
}
