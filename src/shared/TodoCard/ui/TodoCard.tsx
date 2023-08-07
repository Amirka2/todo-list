import React, {useState} from 'react';
import {CardTextWrapper, CardWrapper, Checkbox, Notes, Title} from "./TodoCard.styles";

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
                <Checkbox type='checkbox' checked={checked} onClick={handleChecked}/>
                <CardTextWrapper>
                    <Title className='title'>{props.title}</Title>
                    <Notes className='notes'>{props.children}</Notes>
                </CardTextWrapper>
            </CardWrapper>
        </div>
    );
};