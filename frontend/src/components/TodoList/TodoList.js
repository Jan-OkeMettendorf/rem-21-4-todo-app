import './TodoList.css'
import Todos from "../Todos/Todos";
import styled from "styled-components/macro";

export default function TodoList({todos, title, onAdvance, onDelete}){

    // console.log('TodoList:', todos)

    return (
        <div className="todo-container">
            <h2>{title}</h2>
            <div className="todoList">
                {todos.map(
                    todo => (
                        <StyledLi key={todo.id}>
                            <Todos todoItem={todo} nextStatusTodos={onAdvance} deleteTodos={onDelete}/>
                        </StyledLi>
                    )
                )}
            </div>
        </div>
    )
}

const StyledLi = styled.li`
    list-style-type: none;
`