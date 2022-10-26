import React from "react";
import {StyledInput} from "./Input.styles";
import {InputProps} from "./Input.types";

export function Input({
                          backgroundColor,
                          borderColor,
                          radius,
                          inputSize = 'large',
                          inputPlaceholder = "This is a space for a placeholder..."
                      }: InputProps) {
    return (
        <StyledInput
            inputSize={inputSize}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            radius={radius}
            type="text"
            placeholder={inputPlaceholder}
        />
    )
}
