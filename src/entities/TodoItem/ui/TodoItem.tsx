import React from 'react';
import {TodoCard} from "../../../shared/TodoCard/ui/TodoCard";

export interface TodoItemProps {
    checkbox: boolean;
    title: string;
    children: string;
}
const TodoItem = (props: TodoItemProps) => {
    return (
        <TodoCard checkbox={props.checkbox} title={props.title}>
            {props.children}
        </TodoCard>
    );
};

export default TodoItem;