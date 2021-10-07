import {useParams} from "react-router-dom";
import TodoList from "../TodoList/TodoList";

export default function TodoBoard({todos, onAdvance, onDelete}){

    const {statusSlug} = useParams()

    const slugToStatus = {
        "open": 'OPEN',
        "in-progress": 'IN_PROGRESS',
        "done": "DONE"
    }

    const filteredTodos = todos.filter(todo => todo.status === slugToStatus[statusSlug])

    const statusToTitle = {
        "open": "OPEN",
        "in-progress": "IN PROGRESS",
        "done": "DONE"
    }

    const title = statusToTitle[statusSlug]

    return (
        <TodoList
            todos={filteredTodos}
            onAdvance={onAdvance}
            onDelete={onDelete}
            title={title}
        />
    )

}