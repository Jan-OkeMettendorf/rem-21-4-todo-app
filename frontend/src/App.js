import './App.css';
import styled from "styled-components"
import InputToDo from './components/InputToDo/InputToDo'
import RoutedTodoBox from './components/RoutedTodoBox/RoutedTodoBox'
import {useEffect, useState} from "react";
import {fetchDataFromBackend} from "./service/fetchDataFromBackend";
import {fetchDataPOST} from "./service/fetchDataPOST";
import {fetchDataDELETE} from "./service/fetchDataDELETE";
import {fetchDataPUT} from "./service/fetchDataPUT";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation} from "./components/Navigation/Navigation";
import TodoList from "./components/TodoList/TodoList";
import DetailPage from "./components/DetailPage/DetailPage";



function App() {
    //cons variables

    const [tasks, setTasks] = useState([]);

    const [mobile, setMobile] = useState(
        window.innerWidth < 800
    )

    const openTasks         = tasks.filter(todo => todo.status === 'OPEN')
    const inProgressTasks   = tasks.filter(todo => todo.status === 'IN_PROGRESS')
    const doneTasks         = tasks.filter(todo => todo.status === 'DONE')

    const count = {open: openTasks.length, in_progress: inProgressTasks.length , done: doneTasks.length}

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
                <Navigation mobile={mobile} count={count}/>
                <Switch>
                    <header className="App-header">
                        <InputToDo AddTodo={addNewTodo}/>
                        <Route exact path="/" >
                            <StyledThreeLists>
                                <TodoList title={'OPEN'} todos={openTasks} nextStatusTodos={nextStatusTodo}/>
                                <TodoList title={'IN PROGRESS'} todos={inProgressTasks} nextStatusTodos={nextStatusTodo}/>
                                <TodoList title={'DONE'} todos={doneTasks} deleteTodos={deleteTodo}/>
                            </StyledThreeLists>
                        </Route>
                        <RoutedTodoBox openTodos={openTasks} nextStatusTodos={nextStatusTodo} deleteTodos={deleteTodo}/>
                        <Route path={"/todo/:id"}>
                            <DetailPage/>
                        </Route>
                    </header>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

const StyledThreeLists = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 20px;
  height: 100vh;
`
