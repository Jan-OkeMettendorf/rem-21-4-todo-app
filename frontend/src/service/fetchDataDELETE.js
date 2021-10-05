export function fetchDataDELETE(id){
    // console.log('id:',id)
    return fetch(`api/todo/${id}`, {
        method: 'DELETE',
    })

}