import React, { useState } from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(e){
    
  }

  return (
    <>
      <TodoList todos={todos} />
      <input type="text" name="" id="" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear completed todos</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
