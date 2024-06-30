import React, { useState } from "react";

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
    <div>
      <h3>Задание №2</h3>
      <h2>Count: {count}</h2>
      <button style={buttonStyle} onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
