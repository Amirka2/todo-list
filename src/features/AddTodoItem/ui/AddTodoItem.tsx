import React, {useState} from 'react';
import {AddTodoItem as AddTodoItemAPI} from "../api/AddTodoItem";
import {CardTextWrapper, CardWrapper} from "../../../shared/TodoCard";
import {TodoItemProps} from "../../../entities/TodoItem/ui/TodoItem";
import {Column, Row} from "../../../shared/Wrapper";
import {NoteInput, TitleInput, InputFields, Form, SubmitButton} from "./AddTodoItem.styles";

export interface AddTodoItemProps {
    addTodoItem: (itemProps: TodoItemProps) => void;
}

export const AddTodoItem = (props: AddTodoItemProps) => {
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
                    <Form onSubmit={handleSubmit}>
                        <InputFields>
                            <TitleInput name='title' type='text' value={title} placeholder={'Title'}
                                        onChange={handleTitle}/>
                            <NoteInput name='note' type='text' value={note} placeholder={'Notes'}
                                       onChange={handleNote}/>
                        </InputFields>
                        <SubmitButton type='submit'>Add</SubmitButton>
                    </Form>
                </CardTextWrapper>
            </CardWrapper>
        </Column>
    );
};
