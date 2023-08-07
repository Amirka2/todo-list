import React from 'react';
import './TodoApp.css';
import TodoList from "../../entities/TodoList/ui/TodoList";

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
  return (
      <div>
        <TodoList TodoItemProps={todoItemsProps}></TodoList>
      </div>
  );
}

export default TodoApp;
