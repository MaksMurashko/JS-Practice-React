import React, { useState } from "react";
import Task from "./Task";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input value:", inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Task title="Задание №3">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter a value"
        />
        <button type="submit">Submit</button>
      </form>
    </Task>
  );
};

export default Form;
