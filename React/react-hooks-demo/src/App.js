import React, { useState } from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import TodoList from './components/TodoList';
import UseStateHook from './Hooks/UseStateHook';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '5em',
      }}
    >
      <UseStateHook />
    </div>
  );
}

export default App;
