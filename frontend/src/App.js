import './App.css';
import InputToDo from './components/InputToDo/InputToDo'
import ToDoBox from './components/ToDoBox/ToDoBox'
import {useState} from "react";

function App() {

    const [toDos, setToDos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
          <InputToDo />
          <ToDoBox />
      </header>
    </div>
  );
}

export default App;
