import React, { Component } from 'react';

export class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  resetCount = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>
          {' '}
          Count {this.state.count}{' '}
        </button>
        <button onClick={this.resetCount}> Reset </button>
      </div>
    );
  }
}

export default ClassCounter;
