import styled from "styled-components/macro";
import TodoList from "./TodoList/TodoList";

export default function Homepage({todos, onAdvance, onDelete}) {

    const filteredOpenTasks = todos.filter(todo => todo.status === 'OPEN')
    const filteredInProgressTasks = todos.filter(todo => todo.status === 'IN_PROGRESS')
    const filteredDoneTasks = todos.filter(todo => todo.status === 'DONE')

    return (
        <StyledThreeLists>
            <TodoList
                title={'OPEN'}
                todos={filteredOpenTasks}
                onAdvance={onAdvance}
            />
            <TodoList
                title={'IN PROGRESS'}
                todos={filteredInProgressTasks}
                onAdvance={onAdvance}
            />
            <TodoList
                title={'DONE'}
                todos={filteredDoneTasks}
                onDelete={onDelete}
            />
        </StyledThreeLists>
    )

}

const StyledThreeLists = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 20px;
  height: 100vh;
`