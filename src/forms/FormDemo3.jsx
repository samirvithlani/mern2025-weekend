import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

export const FormDemo3 = () => {
  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      medicines: [{ name: "", dosage: "", frequency: "" }],
    },
  });
  //fields : array
  const { fields, append, remove } = useFieldArray({
    control,
    name: "medicines",
  });
  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          return (
            <div>
              <div>
                <input
                  {...register(`medicines.${index}.name`)}
                  placeholder="enter medicien name"
                ></input>
              </div>
              <div>
                <input
                  {...register(`medicines.${index}.dosage`)}
                  placeholder="enter Dosage"
                ></input>
              </div>
              <div>
                <input
                  {...register(`medicines.${index}.frequency`)}
                  placeholder="enter frequency"
                ></input>
              </div>
            </div>
          );
        })}
        <button
          type="button"
          onClick={() => {
            append({ name: "", dosage: "", frequency: "" });
          }}
        >
          ADD MEDICINE
        </button>
        <button type="submit" value="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};
