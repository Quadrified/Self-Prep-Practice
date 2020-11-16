import React, { useState } from 'react';
import styles from './styles.css';

export default function UseStateHook() {
  //   const [count, setCount] = useState(() => {
  //     console.log('Ran once');
  //     return 5;
  //   });
  const [state, setState] = useState({ count: 1, theme: 'blue' });
  const count = state.count;
  const theme = state.theme;

  function decrementCount() {
    // setCount((prevCount) => prevCount - 1);

    // This overrrides entire state
    // setState((prevState) => {
    //   return { count: prevState.count - 1 };
    // });

    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  }
  function incrementCount() {
    // setCount((prevCount) => prevCount + 1);
    
    // This overrrides entire state
    // setState((prevState) => {
    //   return { count: prevState.count + 1 };
    // });

    setState((prevState) => {
        return { ...prevState, count: prevState.count + 1 };
      });
} 

  return (
    <>
      <button className="button" onClick={decrementCount}>
        -
      </button>
      <span> {count} </span>
      <span> {theme} </span>
      <button className="button" onClick={incrementCount}>
        +
      </button>
    </>
  );
}
