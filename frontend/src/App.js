import './App.css';

import InputToDo from './components/InputToDo/InputToDo';
import {useEffect, useState} from "react";
import {fetchDataFromBackend} from "./service/fetchDataFromBackend";
import {fetchDataPOST} from "./service/fetchDataPOST";
import {fetchDataDELETE} from "./service/fetchDataDELETE";
import {fetchDataPUT} from "./service/fetchDataPUT";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation} from "./components/Navigation/Navigation";
import DetailPage from "./components/DetailPage/DetailPage";
import Homepage from "./components/Homepage";
import TodoBoard from "./components/TodoBoard/TodoBoard";


function App() {
    //cons variables

    const [tasks, setTasks] = useState([]);

    const [mobile, setMobile] = useState(
        window.innerWidth < 800
    )

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
                    setTasks(response)
                })
                .catch((error) => console.log(error))
        }
        , []
    )

    const getAllToDos = () => {
        fetchDataFromBackend()
            .then(response => {
                setTasks(response)
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

    const deleteTodo = id => {
        console.log('id: ', id)
        fetchDataDELETE(id)
            .then(getAllToDos)
            .catch(error => console.log(error))
    }

    // What is this?
    const nextStatusTodo = todo => {
        console.log('nextStatus:', todo)
        if (todo.status === 'OPEN') {
            const updatedTodo = {...todo, status: 'IN_PROGRESS'}
            fetchDataPUT(updatedTodo)
                .then(getAllToDos)
                .catch(error => console.log(error))

        } else {
            const updatedTodo = {...todo, status: 'DONE'}
            fetchDataPUT(updatedTodo)
                .then(getAllToDos)
                .catch(error => console.log(error))
        }


    }


    return (
        <Router>
            <div className="App">
                <Navigation mobile={mobile} tasks={tasks}/>
                <Switch>
                    <header className="App-header">
                        <InputToDo AddTodo={addNewTodo}/>
                        <Route  path="/" exact>
                            <Homepage
                                todos={tasks}
                                onAdvance={nextStatusTodo}
                                onDelete={deleteTodo}
                            />
                        </Route>
                        <Route path="/:statusSlug">
                            <TodoBoard
                                todos={tasks}
                                onAdvance={nextStatusTodo}
                                onDelete={deleteTodo}
                            />
                        </Route>
                        <Route path={"/todo/details/:id"}>
                            <DetailPage/>
                        </Route>
                    </header>
                </Switch>
            </div>
        </Router>
    );
}

export default App;


