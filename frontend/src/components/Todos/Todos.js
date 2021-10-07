import {useHistory} from "react-router-dom";
import styled from "styled-components/macro";

export default function Todos({todoItem, nextStatusTodos, deleteTodos}) {
    // console.log({todoItem})

    const history = useHistory();

    return(
    <StyledContainer>
        <StyledDescription>{todoItem.description}</StyledDescription>
        <StyledButtonList>
            <StyledButtons onClick={() => history.push(`/todo/details/${todoItem.id}`)}>Get details</StyledButtons>
            {nextStatusTodos && <StyledButtons onClick={() => nextStatusTodos(todoItem)}>Advance</StyledButtons>}
            {deleteTodos && <StyledButtons onClick={() => deleteTodos(todoItem.id)} className="todo-buttons">Delete</StyledButtons>}
        </StyledButtonList>
    </StyledContainer>
    )
}

const StyledContainer = styled.div `
  display: grid;
  /*border: solid;*/
  min-height: 100px;
  margin-bottom: 5px;
  /*flex-direction: column;*/
  /*justify-content: space-between;*/
  grid-template-rows: 2fr 1fr;
  background-color: black;
  border-radius: 10px;
`

const StyledDescription = styled.div`
  margin: 5px;
  color: white;
  font-weight: bold;
`

const StyledButtonList = styled.button`
    display: flex;
    flex-direction: row;
    margin: 0 2px 5px 0;
    gap: 5px;
    justify-content: flex-end;
    background-color: black;
    border: none;
`

const StyledButtons = styled.button`
  background-color: turquoise;
  border: none;
  border-radius: 2px;
  color: black;
  font-weight: bold;
  /*padding: 5px 10px;*/
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  height: 30px;
  width: 100px;
`

