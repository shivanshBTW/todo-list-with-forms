import React, { Component } from 'react';
// import Task from './Todo.js/index.js';
import './App.css';
import TodoList from './TodoList.js';

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
