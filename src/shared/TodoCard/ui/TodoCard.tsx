import React, {useState} from 'react';
import {CardTextWrapper, CardWrapper, Notes, Title} from "./TodoCard.styles";
import {Label, Toggle} from "../../Themes";

export interface cardProps {
    checkbox: boolean;
    title: string;
    children: string;
}
export const TodoCard = (props: cardProps) => {
    const [checked, setChecked] = useState(props.checkbox);
    const handleChecked = () => {
        setChecked(prev => !prev);
    }
    return (
        <div className='todo-card'>
            <CardWrapper>
                <CardTextWrapper>
                    <Title className='title'>{props.title}</Title>
                    <Notes className='notes'>{props.children}</Notes>
                </CardTextWrapper>
                <div>
                    <Toggle id='checked' type='checkbox' checked={checked} onChange={handleChecked}/>
                    <Label htmlFor='checked'></Label>
                </div>
            </CardWrapper>
        </div>
    );
};
