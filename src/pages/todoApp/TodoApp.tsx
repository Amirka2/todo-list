import React, {useState} from 'react';
import './TodoApp.css';
import TodoList from "../../entities/TodoList/ui/TodoList";
import AddTodoItem from "../../features/AddTodoItem/ui/AddTodoItem";
import {TodoItemProps} from "../../entities/TodoItem/ui/TodoItem";

const todoItemsProps = [
    {
        checkbox: false,
        title: '1',
        children: '1 note'
    },
    {
        checkbox: false,
        title: '2',
        children: '2 note'
    },
    {
        checkbox: false,
        title: '3',
        children: '3 note'
    },
    {
        checkbox: false,
        title: '4',
        children: '4 note'
    },
]

function TodoApp() {
    const [todoItemProps, setTodoItemProps] = useState(todoItemsProps);
    function addTodoItem(props: TodoItemProps) {
        setTodoItemProps(prev => [...prev, props]);
    }
    return (
        <div>
            <TodoList TodoItemProps={todoItemProps}></TodoList>
            <AddTodoItem addTodoItem={addTodoItem}></AddTodoItem>
        </div>
    );
}

export default TodoApp;
