export function fetchDataPUT(nextStatus){
    return fetch('api/todo/'+nextStatus.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            status: nextStatus.status,
        }),
    })
        .then((res) => res.json())
        .then(json => console.log('PUT:', json))
        // .then(fetchDataFromBackend)
        .catch((err) => console.log('error'))
}