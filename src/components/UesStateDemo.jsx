import React, { useState } from "react";

export const UesStateDemo = () => {
  //DOM :  V-DOM
  //var count = 0;
  const [count, setCount] = useState(0);
  //const [flag, setflag] = useState(false)
  //const [users, setusers] = useState([])
  //const [user, setuser] = useState({})
  //const [name, setname] = useState("")
  
  //count ->state variable
  //setCount ==>function : to update value of count...
  //0 initial value of count.....

  const increseCount = () => {
    //count++;
    setCount(count+1)
    console.log("count after ++", count);
  };
  return (
    <div>
      <h1>count = {count}</h1>
      <button
        onClick={() => {
          increseCount();
        }}
      >
        +
      </button>
    </div>
  );
};
