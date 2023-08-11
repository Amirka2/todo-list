import React from 'react';
import {Container, Label, Toggle} from "./ThemeToggle.styles";

export interface themeToggleProps {
    toggleTheme: () => void;
}

export const ThemeToggle = (props: themeToggleProps) => {
    return (
        <Container>
            <Toggle type='checkbox' onChange={props.toggleTheme} id='toggle'/>
            <Label htmlFor='toggle'></Label>
        </Container>
    );
};

