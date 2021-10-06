import './App.css';
import InputToDo from './components/InputToDo/InputToDo'
import TodoBox from './components/TodoBox/TodoBox'
import RoutedTodoBox from './components/RoutedTodoBox/RoutedTodoBox'
import {useEffect, useState} from "react";
import {fetchDataFromBackend} from "./service/fetchDataFromBackend";
import {fetchDataPOST} from "./service/fetchDataPOST";
import {fetchDataDELETE} from "./service/fetchDataDELETE";
import {fetchDataPUT} from "./service/fetchDataPUT";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation} from "./components/Navigation/Navigation";



function App() {

    //cons variables

    const [todos, setTodos] = useState([]);

    const [mobile, setMobile] = useState(
        window.innerWidth < 800
    )

    const

    console.log('mobile < 800:', mobile)

    window.addEventListener("resize", handleResize);

    function handleResize() {
        setMobile(
            window.innerWidth < 800
        )
    }

    // methods/functions

    useEffect(() => {

            fetchDataFromBackend()
                .then(response => {
                    setTodos(response)
                })
                .catch((error) => console.log(error))
        }
        , []
    )

    const getAllToDos = () => {
        fetchDataFromBackend()
            .then(response => {
                setTodos(response)
            })
            .catch((error) => console.log(error))
    }

    const addNewTodo = description => {
        if (description !== '') {
            const todo = {description, status: 'OPEN'}
            fetchDataPOST(todo)
                .then(getAllToDos)
                .catch(error => console.log(error))
        }
    }

    const nextStatusTodo = todo => {
        console.log('nextStatus:', todo)
        if (todo.status === 'OPEN') {
            const updatedTodo = {...todo, status: 'IN_PROGRESS'}
            fetchDataPUT(updatedTodo)
                .then(promise => todos.map(todo => {
                    if (todo.id === promise.id) {
                        return updatedTodo
                    }
                    return todo
                }))
                .then(data => setTodos(data))
                .catch(error => console.log(error))

        } else {
            const updatedTodo = {...todo, status: 'DONE'}
            fetchDataPUT(updatedTodo)
                .then(getAllToDos)
                .catch(error => console.log(error))
        }


    }

    const deleteTodo = id => {
        console.log('id: ', id)
        fetchDataDELETE(id)
            .then(getAllToDos)
            .catch(error => console.log(error))
    }

    return (
        <Router>
            <div className="App">
                <Navigation mobile={mobile} count={count}/>
                <Switch>
                    <header className="App-header">
                        <InputToDo AddTodo={addNewTodo}/>
                        <Route exact path="/" >
                            <TodoBox openTodos={todos} nextStatusTodos={nextStatusTodo} deleteTodos={deleteTodo}/>
                        </Route>
                        <Route path={["/open","/in_progress","/done"]}>
                        </Route>
                            <RoutedTodoBox openTodos={todos} nextStatusTodos={nextStatusTodo} deleteTodos={deleteTodo}/>
                    </header>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
