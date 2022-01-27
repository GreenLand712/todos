import React, { Component } from 'react'
import styles from './TodoItem.module.css'

export class TodoItem extends Component {
    state = {
        editing: false
    }

    editHandler = () => {
        this.setState({editing: true})
    }

    handleUpdate = event => {
        if (event.key === 'Enter'){
            this.setState({editing: false})
        }
    }

    render() {
        let viewMode = {}
        let editMode = {}
        if (this.state.editing){viewMode.display='none'}
        else {editMode.display='none'}
        const {completed, id, title} = this.props.todo
    return (
        <li className={styles.item}>
            <div onDoubleClick={this.editHandler} style={viewMode}>
                <input type="checkbox" className={styles.checkbox} onChange={() => this.props.markComplete(id)} />
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
                <button onClick={() => this.props.delTodo(id)}>Delete</button>
            </div>
            <input type='text'
                className={styles.textInput} 
                style={editMode} 
                value={title} 
                autoFocus
                onChange={e => {
                    this.props.setUpdate(e.target.value, id)
                }}
                onKeyDown={this.handleUpdate}
            />
        </li>
    )
  }
}

const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
}

export default TodoItem
