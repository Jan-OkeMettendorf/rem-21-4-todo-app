export function fetchDataPUT(updatedTodo){

    const id = updatedTodo.id
    const status = updatedTodo.status

    return fetch(`api/todo/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            status: status,
        }),
    })
        .then((res) => res.json())
        // .then(json => console.log('PUT-Promise:', json))
        // .then(fetchDataFromBackend)
        .catch((err) => console.log('error'))
}