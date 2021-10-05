import './InputToDo.css'
import {useState} from "react";

export default function InputToDo({AddTodo}) {

    const [description, setDescription] = useState('')


    const changeInput = (event) => {
        setDescription(event.target.value)
    }

    const postNewTodo = ((event) => {
        if(description !== "") {
            setDescription(description)
        }
        event.preventDefault()
        AddTodo(description)
        setDescription('')
    })

    return (
        <div className="inputContainer">
            <input type="text" name="input" className="input-textBox" value={description} onChange={changeInput} placeholder="please enter a new task here ..."/>
            <button className="input-button" onClick={postNewTodo}>Add task</button>
        </div>
    )
}