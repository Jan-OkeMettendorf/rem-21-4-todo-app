import axios from "axios";

export function fetchDataPOST(newDescription){

    return axios
        .post('api/todo', newDescription)
        .then(r => r.data)
}