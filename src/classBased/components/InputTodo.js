import React, { Component } from 'react'

export class InputTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
  render() {
    return (
      <form onSubmit={this.onSubmit} className='form-container'>
        <input type='text' required className='input-text' placeholder='Add Todos...' name='title' value={this.state.title} onChange={this.onChange} />
        <button className='input-submit'>Add</button>
      </form>
    )
  }
}

export default InputTodo
