export function fetchDataFromBackend(){
    return fetch('api/todo')
        .then(response => {
            if (response.ok){
                console.log(response)
                return response.json();
            } else {
                throw new Error (`error ${response.status}`)
            }
        })
}