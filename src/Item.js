import React from "react";

export class ListItem extends React.Component {
  handleCheckChange = () => {
      let todo = this.props.todo;
      todo.completed = !todo.completed;
      this.props.onCheckChange(todo);
  }

  render() {
      let style = {
          display: "block",
          "textDecoration": this.props.todo.completed ? "line-through" : "none"
      }
    return (
      <label className={'item'} style={style}>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={this.handleCheckChange}
        />
        <span>{this.props.todo.todo}</span>
      </label>
    );
  }
}
