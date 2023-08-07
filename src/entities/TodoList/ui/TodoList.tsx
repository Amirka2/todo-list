import React from 'react';
import TodoItem, {TodoItemProps} from "../../TodoItem/ui/TodoItem";
import {Column} from "../../../shared/Wrapper";

export interface TodoListProps {
    TodoItemProps: TodoItemProps[];
}
const TodoList = (props: TodoListProps) => {
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

export default TodoList;