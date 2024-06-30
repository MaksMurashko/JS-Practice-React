import React, { useState } from "react";

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
    <div>
      <h3>Задание №3</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter a value"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
