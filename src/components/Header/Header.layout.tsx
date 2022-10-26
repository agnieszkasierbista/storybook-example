import React from "react";
import {StyledHeader, StyledMenu, StyledMenuItem, StyledUserName} from "./Header.styled";
import {Button} from "../Button/Button.layout";
import {HeaderProps} from "./Header.types";

export function Header({
                           user,
                           onLogin = () => console.log("Login"),
                           onLogout = () => console.log("Logout"),
                           onCreateAccount = () => console.log("Create Account"),
                           backgroundColor,
                       }:
                           HeaderProps
) {
    return (
        <StyledHeader backgroundColor={backgroundColor}>
            <StyledMenu>
                <StyledMenuItem><Button size="large" label="Home"/></StyledMenuItem>
                <StyledMenuItem><Button size="large" label="News"/></StyledMenuItem>
                <StyledMenuItem><Button size="large" label="About"/></StyledMenuItem>
                <StyledMenuItem><Button size="large" label="Contact"/></StyledMenuItem>
            </StyledMenu>
            <StyledMenu>
                {user
                    ?
                    <>
                        <StyledMenuItem><StyledUserName>Hello, {user.name}!</StyledUserName></StyledMenuItem>
                        <StyledMenuItem><Button size="large" onClick={onLogout} label="Logout"/></StyledMenuItem>
                    </>
                    :
                    <>
                        <StyledMenuItem><StyledUserName>Please log in</StyledUserName></StyledMenuItem>
                        <StyledMenuItem><Button size="large" onClick={onLogin} label="Login"/></StyledMenuItem>
                        <StyledMenuItem><Button size="large" onClick={onCreateAccount}
                                                label="Create Account"/></StyledMenuItem>
                    </>

                }
            </StyledMenu>
        </StyledHeader>
    )
}
