import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { data } from "react-router-dom";

export const FormDemo2 = () => {
  const [formData, setformData] = useState([
    {
      label: "Name",
      type: "text",
      validationtype:"required"
    },
    {
      label: "Age",
      type: "number",
      validationtype:"required"
    },
    {
      label: "City",
      type: "text",
      validationtype:"required"
    },
  ]);

  const { register, handleSubmit,formState:{errors} } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };

  const validationSchema ={
    name:{
        require:{
            value:true,
            message:"name is requird*"
        }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        {formData.map((fd) => {
          return (
            <div>
              <label>{fd.label}</label>
              <input
                type={fd.type}
                {...register(fd.label.toLowerCase())}
              ></input>
            </div>
          );
        })}
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
