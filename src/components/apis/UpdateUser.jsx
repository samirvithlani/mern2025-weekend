import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

export const UpdateUser = () => {
    const id = useParams().id
    const {register,handleSubmit} = useForm({
        defaultValues:async()=>{
            const res = await axios.get("https://node5.onrender.com/user/user/"+id)
            return res.data.data
            //manual
            // return{
            //     name:res.data.data.name
            // }
        }
    })
    const submitHandler = async(data)=>{

        console.log(data)
        delete data._id
        console.log("after remove id",data)
        const res  = await axios.put("https://node5.onrender.com/user/user/"+id,data)
        console.log(res)
    }
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>update user component..</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
