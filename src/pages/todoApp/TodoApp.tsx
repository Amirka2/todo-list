import React, {useState} from 'react';
import './TodoApp.css';
import {TodoList} from "../../entities/TodoList";
import {AddTodoItem} from "../../features/AddTodoItem";
import {TodoItemProps} from "../../entities/TodoItem/ui/TodoItem";
import {ThemeProvider} from "styled-components";
import {ThemeToggle, themeOptions, themes} from "../../shared/Themes";
import {Wrapper} from "../../shared/Wrapper/ui/Wrapper.styles";

const todoItemsProps = [
    {
        checkbox: false,
        title: '1',
        children: '1 note'
    }
]

function TodoApp() {
    const [theme, setTheme] = useState(themeOptions.LIGHT);
    const [todoItemProps, setTodoItemProps] = useState(todoItemsProps);

    function addTodoItem(props: TodoItemProps) {
        setTodoItemProps(prev => [...prev, props]);
    }

    function toggleTheme() {
        setTheme(theme === themeOptions.LIGHT ? themeOptions.DARK : themeOptions.LIGHT);
    }

    return (
        <ThemeProvider theme={themes[theme]}>
            <Wrapper>
                <ThemeToggle toggleTheme={toggleTheme}></ThemeToggle>
                <TodoList TodoItemProps={todoItemProps}></TodoList>
                <AddTodoItem addTodoItem={addTodoItem}></AddTodoItem>
            </Wrapper>
        </ThemeProvider>
    );
}

export default TodoApp;
