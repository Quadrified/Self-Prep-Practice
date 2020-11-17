import React, { useState, useEffect } from 'react';
import styles from './styles.css';

export default function UseEffectHook() {
  const [resourceType, setResourceTytpe] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <button
        className="button"
        onClick={() => {
          setResourceTytpe('posts');
        }}
      >
        Posts
      </button>
      <button
        className="button"
        onClick={() => {
          setResourceTytpe('users');
        }}
      >
        Users
      </button>
      <button
        className="button"
        onClick={() => {
          setResourceTytpe('comments');
        }}
      >
        Comments
      </button>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}
