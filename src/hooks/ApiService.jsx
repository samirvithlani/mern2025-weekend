import axios from "axios"
import { useEffect, useState } from "react"

export const useFetchData=(url)=>{


    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(async() => {
      
        setloading(true)
        try{
        const res = await axios.get(url)
        setdata(res.data.data)
        setloading(false)
        }catch(err){
            setdata(err)
            setloading(false)
        }
      
    }, [url])
    
    return {data,loading}

}