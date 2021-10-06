import TodoList from '../TodoList/TodoList'
import './RoutedTodoBox.css'
import {Route} from "react-router-dom";

export default function TodoBox({openTodos, nextStatusTodos, deleteTodos}) {

    const todos             = openTodos.filter(todo => todo.status === 'OPEN')
    const todosInProgress   = openTodos.filter(todo => todo.status === 'IN_PROGRESS')
    const doneTodos         = openTodos.filter(todo => todo.status === 'DONE')

    console.log('todoBox',todos)

    return (

            <div className="toDoBox-container">
                <Route path="/open">
                <TodoList title={'OPEN'} todos={todos} nextStatusTodos={nextStatusTodos}/>
                </Route>
                <Route path="/in_progress">
                <TodoList title={'IN PROGRESS'} todos={todosInProgress} nextStatusTodos={nextStatusTodos}/>
                </Route>
                <Route path="/done">
                <TodoList title={'DONE'} todos={doneTodos} deleteTodos={deleteTodos}/>
                </Route>
            </div>

    )

}