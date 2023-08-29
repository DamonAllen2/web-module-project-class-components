import React from 'react'

export default class Form extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
    }
  }

  onChange = e => {
    e.preventDefault();
    this.setState({ ...this.state, name: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.name);
    this.setState({ name: '' });
  }

  render() {
    const { addTodo } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <input type='text' value={this.state.name} onChange={this.onChange} placeholder='Put task here'/>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}
