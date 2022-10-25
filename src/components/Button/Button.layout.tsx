import React from "react";
import {StyledButton} from "./Button.styled";
import {ButtonProps} from "./Button.types";

export function Button({buttonText, size, label} : ButtonProps ){
    return (
        <StyledButton onClick={() => console.log('clicked')}>{buttonText}</StyledButton>
    )
}
