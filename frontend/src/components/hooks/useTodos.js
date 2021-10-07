import {fetchDataFromBackend} from "../../service/fetchDataFromBackend";
import {fetchDataPOST} from "../../service/fetchDataPOST";
import {fetchDataDELETE} from "../../service/fetchDataDELETE";
import {fetchDataPUT} from "../../service/fetchDataPUT";
import {useEffect, useState} from "react";

export default function useTodos() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
            fetchDataFromBackend()
                .then(response => {
                    setTasks(response)
                })
                .catch((error) => console.log(error))
        }
        , []
    )

    const getAllToDos = () => {
        fetchDataFromBackend()
            .then(response => {
                setTasks(response)
            })
            .catch((error) => console.log(error))
    }

    const addNewTodo = description => {
        if (description !== '') {
            const todo = {description, status: 'OPEN'}
            fetchDataPOST(todo)
                .then(getAllToDos)
                .catch(error => console.log(error))
        }
    }

    const deleteTodo = id => {
        console.log('id: ', id)
        fetchDataDELETE(id)
            .then(getAllToDos)
            .catch(error => console.log(error))
    }

    const nextStatusTodo = todo => {
        console.log('nextStatus:', todo)
        if (todo.status === 'OPEN') {
            const updatedTodo = {...todo, status: 'IN_PROGRESS'}
            fetchDataPUT(updatedTodo)
                .then(getAllToDos)
                .catch(error => console.log(error))

        } else {
            const updatedTodo = {...todo, status: 'DONE'}
            fetchDataPUT(updatedTodo)
                .then(getAllToDos)
                .catch(error => console.log(error))
        }
    }

    return {tasks, addNewTodo, nextStatusTodo, deleteTodo}

}