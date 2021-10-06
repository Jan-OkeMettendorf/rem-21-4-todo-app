import './Todos.css'
import {useHistory} from "react-router-dom"
export default function Todos({todoItem, nextStatusTodos, deleteTodos}) {
    // console.log({todoItem})
    const history = useHistory()
    return(
    <div className="Todos-container">
        <div className="todo-description">{todoItem.description}</div>
        <div className="todo-buttons">
            <button onClick={()=>history.push("/todo/"+todoItem.id)}
                    className="todo-buttons"> Get Details </button>
            {nextStatusTodos && <button onClick={() => nextStatusTodos(todoItem)} className="todo-buttons">Advance</button>}
            {deleteTodos && <button onClick={() => deleteTodos(todoItem.id)} className="todo-buttons">Delete</button>}
        </div>
    </div>
    )
}