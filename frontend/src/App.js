import './App.css';
import InputToDo from './components/InputToDo/InputToDo'
import TodoBox from './components/TodoBox/TodoBox'
import {useEffect, useState} from "react";
import {fetchDataFromBackend} from "./service/fetchDataFromBackend";
import {fetchDataPOST} from "./service/fetchDataPOST";
import {fetchDataDELETE} from "./service/fetchDataDELETE";
import {fetchDataPUT} from "./service/fetchDataPUT";


function App() {

    //cons variables

    const [todos, setTodos] = useState([]);

    console.log({todos})

    // methods/functions

    useEffect(() => {

            fetchDataFromBackend()
                .then(response => {
                    setTodos (response)
                })
                .catch((error) => console.log(error))
        }
        ,[]
    )

    const getAllToDos = () => {
        fetchDataFromBackend()
            .then(response => {
                setTodos (response)
            })
            .catch((error) => console.log(error))
    }

    const addNewTodo = description => {
        if(description !== '') {
            const todo = {description, status: 'OPEN'}
            fetchDataPOST(todo)
                .then(getAllToDos)
            console.log('Todo-description', todo.description)
        }
    }

    const nextStatusTodo = todo => {
        console.log('nextStatus:', todo)
        if (todo.status === 'OPEN') {
            const nextStatus = {...todo, status: 'IN_PROGRESS'}
            fetchDataPUT(nextStatus)
                .then(getAllToDos)
        } else {
            const nextStatus = {...todo, status: 'DONE'}
            fetchDataPUT(nextStatus)
                .then(getAllToDos)
        }

        //PUT-method
    }

    const deleteTodo = id => {
        console.log('id: ',id)
        fetchDataDELETE(id)
            .then(getAllToDos)
    }


  return (
    <div className="App">
      <header className="App-header">
          <InputToDo AddTodo={addNewTodo}/>
          <TodoBox openTodos={todos} nextStatusTodos={nextStatusTodo} deleteTodos={deleteTodo}/>
      </header>
    </div>
  );
}

export default App;
