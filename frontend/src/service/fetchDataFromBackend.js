import axios from "axios";

export function fetchDataFromBackend(){
    return axios
        .get('api/todo')
        .then(r => r.data)
}