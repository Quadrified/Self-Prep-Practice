import React, { useState } from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import TodoList from './components/TodoList';
import UseEffectHook from './Hooks/UseEffectHook';
import UseStateHook from './Hooks/UseStateHook';

function App() {
  return (
    <div
      style={{
        fontSize: '2em',
      }}
    >
      <UseEffectHook />
    </div>
  );
}

export default App;
