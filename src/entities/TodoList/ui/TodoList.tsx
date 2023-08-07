import React from 'react';
import {TodoItemProps} from "../../TodoItem/ui/TodoItem";
import {TodoItem} from "../../TodoItem";
import {Column} from "../../../shared/Wrapper";

export interface TodoListProps {
    TodoItemProps: TodoItemProps[];
}
export const TodoList = (props: TodoListProps) => {
    let todoItems = props.TodoItemProps.map(itemProps => {
        return (<TodoItem checkbox={itemProps.checkbox} title={itemProps.title}>
            {itemProps.children}
        </TodoItem>);
    })
    return (
        <Column className='todo-list'>
            {todoItems}
        </Column>
    );
};
