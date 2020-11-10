import React from 'react';
import TodoComponent from './TodoComponent';

export default function TodoList({ todos }) {
  return todos.map((todo) => {
    return <TodoComponent todo={todo} key={todo.id} />;
  });
}
