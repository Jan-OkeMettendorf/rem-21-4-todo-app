import axios from "axios";

export function fetchOneTodoByID(id){
    return axios
        .get(`/api/todo/${id}`)
        .then(r => r.data)
}