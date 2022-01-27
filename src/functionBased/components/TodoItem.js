import React, { useState } from 'react'
import styles from './TodoItem.module.css'
import { FaTrashAlt } from 'react-icons/fa'

export default function TodoItem(props) {
    const [editing, setEditing] = useState(false)

    const editHandler = () => {
        setEditing(true)
    }

    const handleUpdate = event => {
        if (event.key === 'Enter'){
            setEditing(false)
        }
    }

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    let viewMode = {}
    let editMode = {}
    if (editing){viewMode.display='none'}
    else {editMode.display='none'}
    const {completed, id, title} = props.todo
    
    return (
        <li className={styles.item}>
            <div onDoubleClick={editHandler} style={viewMode}>
                <input type="checkbox" className={styles.checkbox} onChange={() => props.markComplete(id)} />
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
                <button onClick={() => props.delTodo(id)}><FaTrashAlt color='orangered' fontSize='20px' /></button>
            </div>
            <input type='text'
                className={styles.textInput} 
                style={editMode} 
                value={title} 
                autoFocus
                onChange={e => {
                    props.setUpdate(e.target.value, id)
                }}
                onKeyDown={handleUpdate}
            />
        </li>
    )
}
