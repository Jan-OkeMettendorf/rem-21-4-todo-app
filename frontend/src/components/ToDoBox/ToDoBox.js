import './ToDoBox.css'
import ToDo from '../ToDo/ToDo'

export default function ToDoBox() {

    return (
        <div className="toDoBox-container">
            <div className="toDoBox-open">
                <ToDo/>
            </div>
            <div className="toDoBox-in_progress">
                <ToDo/>
            </div>
            <div className="toDoBox-done">
                <ToDo/>
            </div>
        </div>

    )

}