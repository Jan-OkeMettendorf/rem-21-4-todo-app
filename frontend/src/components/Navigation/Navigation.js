import {Link, NavLink} from "react-router-dom";
import styled from "styled-components/macro";
import {useEffect} from "react";
import {fetchDataFromBackend} from "../../service/fetchDataFromBackend";

export function Navigation({mobile, tasks}) {

    const filteredOpenTasks = tasks.filter(task => task.status === 'OPEN').length
    const filteredInProgressTasks = tasks.filter(task => task.status === 'IN_PROGRESS').length
    const filteredDoneTasks = tasks.filter(task => task.status === 'DONE').length

    const count = {open: filteredOpenTasks, inProgress: filteredInProgressTasks , done: filteredDoneTasks}

    return (
        <nav>
            {!mobile ?
                <StyledUl mobile={mobile}>
                    <StyledNavLink to="/">HOME</StyledNavLink>
                    <StyledNavLink to="/open">OPEN {" ("+count.open+")"}</StyledNavLink>
                    <StyledNavLink to="/in-progress">IN PROGRESS{" ("+count.inProgress+")"}</StyledNavLink>
                    <StyledNavLink to="/done">DONE{" ("+count.done+")"}</StyledNavLink>
                </StyledUl>
                :
                <StyledUl mobile={mobile}>
                    <StyledNavLink to="/open">OPEN {" ("+count.open+")"}</StyledNavLink>
                    <StyledNavLink to="/in-progress">IN PROGRESS{" ("+count.inProgress+")"}</StyledNavLink>
                    <StyledNavLink to="/done">DONE{" ("+count.done+")"}</StyledNavLink>
                </StyledUl>
            }
        </nav>
    )
}

const StyledUl = styled.ul`

  display: flex;
  flex-direction: ${props => props.mobile ? "column" : "row"};
  justify-content: center;
  justify-items: center;
  align-items: center;
  gap: 5px;
  padding-right: 40px;
;

`

const StyledNavLink = styled(NavLink)`
  &:hover {
    background-color: darkslategray;
    cursor: pointer;
    transition: 0.5s;
  }

  font-size: 20px;
  color: turquoise;
  font-weight: bold;
  text-decoration: none;
  background-color: black;
  padding: 2px 20px 2px 20px;
  border-radius: 5px;
  text-align: center;
  width: 300px;
`

