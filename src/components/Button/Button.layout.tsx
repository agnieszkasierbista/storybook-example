import React from "react";
import {StyledButton} from "./Button.styled";
import {ButtonProps} from "./Button.types";

export function Button({
                           size = 'medium',
                           backgroundColor = 'white',
                           label,
                           onClick,
                           radius = 5,
                           primary = false,
                           ...props
                       }: ButtonProps) {
    return (
        <StyledButton
            radius={radius}
            size={size}
            backgroundColor={backgroundColor}
            onClick={onClick}
            primary={primary}
            {...props}>
            {label}
        </StyledButton>
    )
}
