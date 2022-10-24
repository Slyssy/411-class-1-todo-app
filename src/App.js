import React from 'react';
import './App.css';
import { nanoid } from 'nanoid';

// * Using classes to render a react component
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      todos: [],
      text: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleDelete = (id) => {
    // * The id argument is captured when we call the handleDelete function with todo.id.
    // console.log(id);

    // * Find index for the id key in the todo object.
    const index = this.state.todos.findIndex((todo) => todo.id === id);
    // console.log(index);

    // * Creating a copy of the current todos array
    const todosCopy = [...this.state.todos];

    // * Mutating the todosCopy array by splicing the item with the single item
    // *  with the index we identified on line 30.
    todosCopy.splice(index, 1);

    // * The new todos array is set to the mutated todosCopy
    this.setState({ todos: todosCopy });
  };

  handleSubmit = (e) => {
    this.setState({
      // * Using the spread operator to unpack the existing todos and then
      // *  creating a new array with those unpacked items and adding the one
      // *  that was dded to this.state.text.
      todos: [...this.state.todos, { id: nanoid(), text: this.state.text }],
      text: '',
    });
  };

  render() {
    // console.log(this);
    return (
      <div className='App'>
        <h1 className='title'>Stephen Lyssy's Basic To-Do App</h1>
        <div className='input-task'>
          <h4>Enter New Task:</h4>
          <input
            type='text'
            name='task'
            id='task'
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li className='list-item' key={todo.id}>
                <h4>{todo.text}</h4>
                <button
                  className='complete-button'
                  onClick={() => this.handleDelete(todo.id)}
                >
                  Complete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
