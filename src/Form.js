import React, { Component } from 'react';
import uuid from 'uuid/v4';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: 'formtest'
      //   id: uuid()
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addItem({ ...this.state, id: uuid() });
  }
  handleChange(evt) {
    this.setState({ taskName: evt.target.value });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="taskName" />
          <input
            type="text"
            value={this.state.taskName}
            onChange={this.handleChange}
            name="taskName"
          />
          <button>Add Task</button>
        </form>
      </div>
    );
  }
}
