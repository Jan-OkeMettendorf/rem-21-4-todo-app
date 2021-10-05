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
            // console.log('Todo-description', todo.description)
        }
    }

    const nextStatusTodo = todo => {
        console.log('nextStatus:', todo)
        if (todo.status === 'OPEN') {
            const updatedTodo = {...todo, status: 'IN_PROGRESS'}
            fetchDataPUT(updatedTodo)
                .then(promise => todos.map(todo => {
                    if(todo.id === promise.id){
                        return updatedTodo
                    }
                    return todo
                }))
                .then(data => setTodos(data))

        } else {
            const updatedTodo = {...todo, status: 'DONE'}
            fetchDataPUT(updatedTodo)
                .then(getAllToDos)
                // .then(promise => setTodos(...todos, promise))
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
