import {fetchDataFromBackend} from "./fetchDataFromBackend";

export function fetchDataPOST(description){
    return fetch('api/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            status: description.status,
            description: description.description
        }),
    })
        .then((res) => res.json())
        .then(json => console.log('POST:', json))
        // .then(fetchDataFromBackend)
        .catch((err) => console.log('error'))
}