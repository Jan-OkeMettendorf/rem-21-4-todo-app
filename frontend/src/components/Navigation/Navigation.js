import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";

export function Navigation({mobile, count}) {
    return (
        <nav>
            {!mobile ?
                <StyledUl mobile={mobile}>
                    <StyledNavLink to="/">HOME</StyledNavLink>
                </StyledUl>
                :
                <StyledUl mobile={mobile}>
                    <StyledNavLink to="/open">OPEN {" ("+count.open+")"}</StyledNavLink>
                    <StyledNavLink to="/in_progress">IN PROGRESS{" ("+count.in_progress+")"}</StyledNavLink>
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

