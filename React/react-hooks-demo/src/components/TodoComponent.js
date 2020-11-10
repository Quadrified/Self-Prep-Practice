import React from 'react';

export default function TodoComponent({ todo }) {
  return (
    <div>
      <label>
        <input type="checkbox" name="" id="" checked={todo.isCompleted} />
        {todo.name}
      </label>
    </div>
  );
}
