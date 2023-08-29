import React from 'react'
import Form from './Form';
import TodoList from './TodoList'

let id = 0;
let getId = () =>++id;

const initialList = [
  {name: 'walk dog', id: getId(), completed: false},
  {name: 'learn React', id: getId(), completed: false},
  {name: 'have fun', id: getId(), completed: false},
]

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: initialList,
    }
  }

  addTodo = (name) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({ id: getId(), completed: false, name })
    })
  }

  completedFunction = id => {
    this.setState({
      ...this.state, 
      todos: this.state.todos.map(toDos => {
        if (id == toDos.id) return { ...toDos, completed: !toDos.completed }
        return toDos;
      })
    })
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} completedFunction={this.completedFunction}/>
        <Form addTodo={this.addTodo}/>
      </div>
    )
  }
}
