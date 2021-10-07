import {useParams} from "react-router-dom"
import styled from "styled-components/macro";
import {fetchOneTodoByID} from "../../service/fetchOneTodoByID";
import {useEffect, useState} from "react";

export default function DetailPage() {

    const [detailedTodo, setDetailedTodo] = useState({})

    const {id} = useParams()

    useEffect(() => {
            fetchOneTodoByID(id)
                .then(todo => {
                    setDetailedTodo(todo)
                    console.log('Detailpage: ', todo)
                })
                .catch((error) => console.log(error))
        }
    , [id]
    )



    console.log('Todo: ', detailedTodo)
    console.log('ID: ', id)

    return (
        <StyledTable>
            <StyledInformation>
                <p>Status: </p>
                <p>ID: </p>
                <p>Description: </p>
            </StyledInformation>
            <StyledTodoData>
                <p>{detailedTodo.status}</p>
                <p>{id}</p>
                <p>{detailedTodo.description}</p>
            </StyledTodoData>

        </StyledTable>
    )
}

const StyledTable = styled.div`

  display: grid;
  grid-template-columns: 2fr 5fr;
  gap: 5px;
  margin: 10px;
`

const StyledInformation = styled.div`
  padding: 5px;
  border-radius: 5px;
  color: white;
  background-color: black;
  font-weight: bold;
`

const StyledTodoData = styled.div`
  padding: 5px;
  border-radius: 5px;
  color: white;
  background-color: black;
  font-weight: bold;
`