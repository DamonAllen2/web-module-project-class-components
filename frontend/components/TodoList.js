import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
constructor() {
super();
  this.state = {
    showAll: true,
  }
}

toggleShowAll = e => {
  this.setState({
    ...this.state, showAll: !this.state.showAll,
  })
}

  render() {
    const { todos, completedFunction } = this.props;
    const filtered = todos.filter(td => !td.completed || this.state.showAll)
    return (
      
      <div>
        <h2>Todos:</h2>
        {
          filtered.map(todo => (<Todo key={todo.id} todo={todo} completedFunction={completedFunction}/>))
        }
        <button onClick={this.toggleShowAll}>{this.state.showAll ? 'Hide completed' : 'Show all'}</button>
      </div>
    )
  }
}
