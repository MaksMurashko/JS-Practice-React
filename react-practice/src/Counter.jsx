import React, { useState } from "react";
import Task from "./Task";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const buttonStyle = {
    backgroundColor: count > 10 ? "red" : "green",
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <Task title="Задание №2">
      <h2>Count: {count}</h2>
      <button style={buttonStyle} onClick={handleIncrement}>
        Increment
      </button>
    </Task>
  );
};

export default Counter;
