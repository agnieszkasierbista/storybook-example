import styled from "styled-components";

export const StyledButton = styled.button<{size: string, backgroundColor: string, primary: boolean, radius: number}>`
  background-color: ${props => props.primary ? "#1ea7fd" : props.backgroundColor};
  padding: ${props => {
    switch (props.size) {
      case "small":
          return "10px 16px";
      case "medium": 
          return "11px 20px";
      case "large":
          return "12px 24px";
      default:
          return "11px 20px";
    }
  }};
  font-size: ${props => {
    switch (props.size) {
      case "small":
        return "12px";
      case "medium":
        return "14px";
      case "large":
        return "16px";
      default:
        return "14px";
    }
  }};
  color: ${props => props.primary ? "white" : "black"};
  border: 2px solid black;
  border-radius: ${props => props.radius ? `${props.radius}px` : "5px"};
  cursor: pointer;
`;
