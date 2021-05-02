import React from "react";
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";
import "./styles.css";

/*
A todo item should have the following attributes:
- text
- completed
- unique id

Should be able to mark as completed or not
Should be able to delete the todo
*/

export default class Todos extends React.Component {
  state = {
    todos: [
      {
        text: "New todo",
        completed: true,
        id: 12345
      },
      {
        text: "another todo",
        completed: false,
        id: 1456
      }
    ],
    newTodo: { text: "" }
  };

  handleNewtodo = (e) => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          ...this.state.newTodo,
          completed: false,
          id: new Date().getUTCMilliseconds()
        }
      ],
      newTodo: {
        text: ""
      }
    });
  };

  handleChange = (e) => {
    this.setState({
      newTodo: {
        text: e.target.value
      }
    });
  };

  handleDelete = (e, id) => {
    this.setState({ todos: this.state.todos.filter((item) => item.id !== id) });
  };

  handleCompleteChange = (e, id) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === id) return { ...item, completed: !item.completed };
        return item;
      })
    });
  };

  render() {
    return (
      <div>
        <NewTodo
          onChange={this.handleChange}
          onSubmit={this.handleNewtodo}
          text={this.state.newTodo.text}
        />
        <TodoList
          todoItems={this.state.todos}
          onCompleteChange={this.handleCompleteChange}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
