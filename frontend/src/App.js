import './App.css';

import InputToDo from './components/InputToDo/InputToDo';
import {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation} from "./components/Navigation/Navigation";
import DetailPage from "./components/DetailPage/DetailPage";
import Homepage from "./components/Homepage";
import TodoBoard from "./components/TodoBoard/TodoBoard";
import useTodos from "./components/hooks/useTodos";

function App() {

    const {tasks, addNewTodo, nextStatusTodo, deleteTodo} = useTodos()

    const [mobile, setMobile] = useState(
        window.innerWidth < 800
    )

    window.addEventListener("resize", handleResize);

    function handleResize() {
        setMobile(
            window.innerWidth < 800
        )
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