import React, { Component } from 'react';
import Form from './Form';
import uuid from 'uuid/v4';
import Todo from './Todo.js';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          taskName: 'task 1',
          id: uuid()
        }
      ]
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(task) {
    this.setState({ todos: [...this.state.todos, task] });
  }
  deleteItem(taskID) {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== taskID) });
  }
  render() {
    return (
      <div>
        <div>
          {this.state.todos.map(todo => {
            return (
              <div>
                <Todo taskName={todo.taskName} deleteItem={this.deleteItem} uid={todo.id} />
              </div>
            );
          })}
        </div>
        <Form addItem={this.addItem} />
      </div>
    );
  }
}
