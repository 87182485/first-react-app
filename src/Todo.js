import React from "react";
import { InputComponent } from "./Input";
import { ListItem } from "./Item";
import { generateHashKey, sortTodo } from "./helpers/helpers";

export class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "hello world",
      todos: []
    };

    this.handleEnterPress = this.handleEnterPress.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }

  addTodo = todo => {
    const newTodo = {
      key: generateHashKey(),
      todo,
      createAt: new Date(),
      completed: false
    };

    const todos = [...this.state.todos, newTodo];

    this.setState(() => ({
      input: "",
      todos: sortTodo(todos)
    }));
  };

  handleEnterPress(event) {
    this.addTodo(event);
  }

  handleInputChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleCheckChange(todo) {
    const todos = this.state.todos.filter(t => t.key!==todo.key);

    this.setState({
        todos: sortTodo([...todos, todo])
    });
  }

  renderList = () => {
    return this.state.todos.map((todo) => (
      <ListItem
        key={todo.key}
        todo={todo}
        onCheckChange={this.handleCheckChange}
      />
    ));
  };

  render() {
    return (
      <div>
        <InputComponent
          value={this.state.input}
          onKeyPress={this.handleEnterPress}
          onChange={this.handleInputChange}
        />
        {this.renderList()}
      </div>
    );
  }
}
