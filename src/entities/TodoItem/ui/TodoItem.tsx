import React from 'react';
import {TodoCard} from "../../../shared/TodoCard";

export interface TodoItemProps {
    checkbox: boolean;
    title: string;
    children: string;
}
export const TodoItem = (props: TodoItemProps) => {
    return (
        <TodoCard checkbox={props.checkbox} title={props.title}>
            {props.children}
        </TodoCard>
    );
};

