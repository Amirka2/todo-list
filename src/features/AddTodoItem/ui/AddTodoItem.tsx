import React, {useState} from 'react';
import {AddTodoItem as AddTodoItemAPI} from "../api/AddTodoItem";
import {TodoCard} from "../../../shared/TodoCard/ui/TodoCard";
import {CardTextWrapper, CardWrapper, Notes, Title} from "../../../shared/TodoCard/ui/TodoCard.styles";
import TodoList from "../../../entities/TodoList/ui/TodoList";
import {TodoItemProps} from "../../../entities/TodoItem/ui/TodoItem";
import {Column} from "../../../shared/Wrapper";

export interface AddTodoItemProps {
    addTodoItem: (itemProps: TodoItemProps) => void;
}
const AddTodoItem = (props: AddTodoItemProps) => {
    const checkbox = false;
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    function handleTitle(e: React.FormEvent<HTMLInputElement>) {
        setTitle(e.currentTarget.value);
    }
    function handleNote(e: React.FormEvent<HTMLInputElement>) {
        setNote(e.currentTarget.value);
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let newTodo = {
            checkbox,
            title,
            children: note
        };
        AddTodoItemAPI(newTodo, props.addTodoItem);
    }
    return (
        <Column>
            <CardWrapper>
                <CardTextWrapper>
                    <form onSubmit={handleSubmit}>
                        <input name='title' type='text' value={title} placeholder={'Title'} onChange={handleTitle}/>
                        <input name='note' type='text' value={note} placeholder={'Notes'} onChange={handleNote}/>
                        <button type='submit'>Add</button>
                    </form>
                </CardTextWrapper>
            </CardWrapper>
        </Column>
    );
};

export default AddTodoItem;