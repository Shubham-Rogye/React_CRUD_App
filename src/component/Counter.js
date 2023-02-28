import React from "react";
import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const Increment = () => {
    setValue(value + 1);
  };
  const Decrement = () => {
    setValue(value - 1);
  };

  return (
    <>
      <button onClick={Decrement}>-</button>
      <input type="number" value={value} />
      <button onClick={Increment}>+</button>
    </>
  );
};

export default Counter;
