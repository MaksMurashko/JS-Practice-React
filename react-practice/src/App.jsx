import "./App.css";
import PhotoList from "./PhotoList";
import Counter from "./Counter";
import Form from "./Form";

function App() {
  return (
    <>
      <header className="flex-center">
        <h1>Вариант 1</h1>
      </header>
      <div id="taskBox">
        <PhotoList />
        <Counter />
        <Form />
      </div>
    </>
  );
}

export default App;
