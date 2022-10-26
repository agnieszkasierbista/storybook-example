import { string } from "prop-types";
import styled from "styled-components";

export const StyledHeader = styled.header<{backgroundColor: string}>`
  display: flex;
  min-height: 90px;
  width: 100%;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "pink"};
  justify-content: space-between;
`;

export const StyledMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display:flex;
`;

export const StyledMenuItem = styled.li`
    padding: 15px;
`;

export const StyledUserName = styled.p`
`;

