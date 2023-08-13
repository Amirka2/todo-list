import React from 'react';
import {Container, Label, Toggle} from "./ThemeToggle.styles";
import {CardTextWrapper, Title} from "../../../TodoCard";

export interface themeToggleProps {
    toggleTheme: () => void;
}

export const ThemeToggle = (props: themeToggleProps) => {
    return (
        <Container>
            <CardTextWrapper>
                <Title>
                    Theme Toggle
                </Title>
            </CardTextWrapper>
            <div>
                <Toggle type='checkbox' onChange={props.toggleTheme} id='toggle'/>
                <Label htmlFor='toggle'></Label>
            </div>
        </Container>
    );
};

