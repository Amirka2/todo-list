import React from 'react';
import './TodoApp.css';
import {TodoCard} from "../../shared/TodoCard/ui/TodoCard";

function TodoApp() {
  return (
      <div>
          <TodoCard checkbox={true} title='New todo'>
              note for the new todo
          </TodoCard>
          <TodoCard checkbox={false} title={'Title'}>
              child of the second todo
          </TodoCard>
      </div>
  );
}

export default TodoApp;
