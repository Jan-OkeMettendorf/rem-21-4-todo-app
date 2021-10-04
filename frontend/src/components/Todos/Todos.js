import './Todos.css'

export default function Todos({todoItem, nextStatusTodos, deleteTodos}) {
    console.log({todoItem})
    return(
    <div className="Todos-container">
        <div className="todo-description">{todoItem.description}</div>
        <buttons className="todo-buttons">
            {nextStatusTodos && <button onClick={() => nextStatusTodos(todoItem)} className="todo-buttons">Advance</button>}
            {deleteTodos && <button onClick={() => deleteTodos(todoItem.id)} className="todo-buttons">Delete</button>}
        </buttons>
    </div>
    )
}