import './InputToDo.css'

export default function InputToDo() {
    return (
        <div className="inputContainer">
            <input type="text" name="input" className="input-textBox"/>
            <button className="input-button">Add To-Do</button>
        </div>
    )
}