import axios from "axios";

export function fetchDataPUT(updatedTodo){

    const id = updatedTodo.id

    return axios.put(`api/todo/${id}`, updatedTodo)
        .then(r => r.data)
}