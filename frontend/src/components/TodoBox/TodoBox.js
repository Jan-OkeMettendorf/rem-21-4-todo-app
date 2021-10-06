import './TodoBox.css'
import TodoList from '../TodoList/TodoList'

export default function TodoBox({openTodos, nextStatusTodos, deleteTodos}) {

    const todos             = openTodos.filter(todo => todo.status === 'OPEN')
    const todosInProgress   = openTodos.filter(todo => todo.status === 'IN_PROGRESS')
    const doneTodos         = openTodos.filter(todo => todo.status === 'DONE')

    console.log('todoBox',todos)

    return (

        <div className="toDoBox-container">
            <TodoList title={'OPEN'} todos={todos} nextStatusTodos={nextStatusTodos}/>
            <TodoList title={'IN PROGRESS'} todos={todosInProgress} nextStatusTodos={nextStatusTodos}/>
            <TodoList title={'DONE'} todos={doneTodos} deleteTodos={deleteTodos}/>
        </div>

    )

}