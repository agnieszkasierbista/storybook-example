import React from "react";
import {StyledInput} from "./Input.styles";
import {InputProps} from "./Input.types";

export function Input({
                          backgroundColor,
                          radius,
                          inputSize = 'large',
                      }: InputProps) {
    return (
        <StyledInput inputSize={inputSize} backgroundColor={backgroundColor} radius={radius} type="text"/>
    )
}
