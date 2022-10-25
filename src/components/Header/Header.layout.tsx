import React from "react";
import {StyledHeader, StyledMenu, StyledMenuItem} from "./Header.styled";
import {Button} from "../Button/Button.layout";

export function Header() {
    return (
        <StyledHeader>I'm a header
            <StyledMenu>
                <StyledMenuItem><Button buttonText="Home"/></StyledMenuItem>
                <StyledMenuItem><Button buttonText="News"/></StyledMenuItem>
                <StyledMenuItem><Button buttonText="About"/></StyledMenuItem>
                <StyledMenuItem><Button buttonText="Contact"/></StyledMenuItem>
            </StyledMenu>
        </StyledHeader>
    )
}
