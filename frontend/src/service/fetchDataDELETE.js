import axios from "axios";

export function fetchDataDELETE(id){
    // console.log('id:',id)
    return axios.delete(`api/todo/${id}`)
}