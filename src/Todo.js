import React, { Component } from 'react';
import './Todo.css';

export default class Task extends Component {
  static defaultProps = {
    taskName: ''
  };
  constructor(props) {
    super(props);
    this.state = {
      taskName: this.props.taskName,
      isEditOn: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  toggleEdit() {
    this.setState({ isEditOn: !this.state.isEditOn });
  }
  handleChange(evt) {
    this.setState({ taskName: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({ isEditOn: !this.state.isEditOn });
  }
  deleteTask(evt) {
    this.props.deleteItem(this.props.uid);
  }
  render() {
    return (
      <div className="Todo">
        {!this.state.isEditOn ? (
          <div>{this.state.taskName}</div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="task"
              value={this.state.taskName}
              onChange={this.handleChange}
              id=""
            />
          </form>
        )}
        <button onClick={this.toggleEdit}>Edit</button>
        <button onClick={this.deleteTask}>Delete</button>
      </div>
    );
  }
}
