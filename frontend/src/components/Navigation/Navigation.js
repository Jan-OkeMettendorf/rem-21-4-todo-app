import {Link} from "react-router-dom";
import styled from "styled-components";

export function Navigation({mobile}) {
    return (
        <nav>
            {!mobile ?
                <StyledUl mobile={mobile}>

                    <li>
                        <StyledLink to="/">HOME</StyledLink>
                    </li>

                </StyledUl>
                :
                <StyledUl mobile={mobile}>
                    <li>
                        <StyledLink to="/open">OPEN</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/in_progress">IN PROGRESS</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/done">DONE</StyledLink>
                    </li>

                </StyledUl>
            }
        </nav>
    )
}

const StyledUl = styled.ul`

  display: flex;
  flex-direction: ${props.mobile ? "column" : "row"};
  justify-content: space-evenly;

`

const StyledLink = styled(Link)`
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
`

