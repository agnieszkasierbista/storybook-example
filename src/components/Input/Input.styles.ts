import styled from "styled-components";

export const StyledInput = styled.input<{backgroundColor?: string, radius?: number, inputSize: string}>`
  padding: 5px;
  margin: 5px;
  background-color:${props => props.backgroundColor ? props.backgroundColor : "pink"};;
  border: 1px solid black;
  border-radius: ${props => props.radius ? `${props.radius}px` : "4px"};
  width: ${props => props.inputSize === 'small' ? '50%' : '100%'};
`;
