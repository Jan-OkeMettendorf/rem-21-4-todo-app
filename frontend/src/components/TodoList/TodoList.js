import './TodoList.css'
import Todos from "../Todos/Todos";

export default function TodoList({todos, title, nextStatusTodos, deleteTodos}){

    console.log('TodoList:', todos)

    return (
        <div className="todo-container">
            <h2>{title}</h2>
            <div className="todoList">
                {todos.map(
                    todo => (
                        <li key={todo.id}>
                            <Todos todoItem={todo} nextStatusTodos={nextStatusTodos} deleteTodos={deleteTodos}/>
                        </li>
                    )
                )}
            </div>
        </div>
    )
}