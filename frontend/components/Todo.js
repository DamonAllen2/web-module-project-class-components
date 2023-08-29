import React from 'react'

export default class Todo extends React.Component {
  render() {
    const { id, name, completed } = this.props.todo;
    const { completedFunction } = this.props;
    return (
      <div onClick={() => completedFunction(id)}>
        {name} {completed && 'completed'}
      </div>
    )
  }
}
