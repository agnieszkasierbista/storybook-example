import styled from "styled-components";

export const StyledInput = styled.input<{backgroundColor?: string, radius?: number, inputSize: string, borderColor?: string}>`
  all: unset;
  padding: 5px;
  margin: 5px;
  background-color:${props => props.backgroundColor ? props.backgroundColor : "pink"};
  border: ${props => props.borderColor ? `1px solid ${props.borderColor}` : "1px solid black"};
  border-radius: ${props => props.radius ? `${props.radius}px` : "4px"};
  width: ${props => props.inputSize === 'small' ? '50%' : '100%'};
  
  &:focus {
    outline: ${props => props.borderColor ? `2px solid ${props.borderColor}` : "2px solid black"};
  }
`;
