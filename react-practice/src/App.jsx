import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PhotoList from "./PhotoList";
import Counter from "./Counter";
import Form from "./Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="taskBox">
      <PhotoList />
      <Counter />
      <Form />
    </div>
  );
}

export default App;
