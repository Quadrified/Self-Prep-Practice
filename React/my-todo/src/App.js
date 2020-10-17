import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      list: [],
    };
  }

  addItem(todoValue) {
    if (todoValue !== '') {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        newItem: '',
        list: list,
      });
    }
  }

  deleteTodo(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({
      list: updatedList,
    });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }

  render() {
    return (
      <main>
        <img src={logo} width="100" height="100" alt="logo" className="logo" />
        <h1 className="app-title">Todo App</h1>
        <div className="container">
          <p>Add an item...</p> <br />
          <input
            type="text"
            className="input-text"
            placeholder="Write a todo"
            required
            value={this.state.newItem}
            onChange={(e) => this.updateInput(e.target.value)}
          />
          <button
            className="add-btn"
            disabled={!this.state.newItem.length}
            onClick={() => this.addItem(this.state.newItem)}
          >
            Add todo
          </button>
          <div className="list">
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      checked={item.isDone}
                      onChange={() => {}}
                    />
                    {item.value}
                    <button onClick={() => this.deleteTodo(item.id)}>
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    );
  }
}
