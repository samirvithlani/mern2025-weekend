import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
    // ... spreadOperaotr..
    const {register,handleSubmit,formState :{errors}}=useForm()
    const submitHandler = (data)=>{
        console.log(data)
    }
    const validationSchema = {
        ageValidator : {
            required:{
                value:true,
                message:"age is required*"
            },
            min:{
                value:18,
                message:"age must grt 18"
            },
            max:{
                value:60,
                message:"age must not grt 60"
            },
            
        },
        contactValidator:{
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
                message:"mobile is not valid..."
            }
        }
    }
  return (
    <div>
        <h1>FORM DEMO 1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type='text' {...register("name",{required:{value:true,message:"Name is required*"}})}></input>
                {/* {errors.name?.message} */}
               <span style={{color:"red"}}> {
                    errors.name && errors.name.message
                }
                </span>
            </div>
            <div>
                <label>Age</label>
                <input type='text' {...register("age",validationSchema.ageValidator)}></input>
                {
                    errors.age?.message
                }
            </div>
            <div>
                <label>Contact</label>
                <input type='text' {...register("contact",validationSchema.contactValidator)}></input>
                {
                    errors.contact?.message
                }
            </div>
            <div>
                <input type='submit' value={"submit"}></input>
            </div>
        </form>
    </div>
  )
}
