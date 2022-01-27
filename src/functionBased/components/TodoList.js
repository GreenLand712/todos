import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  return (
    <ul>
       {props.todos.map(todo =>
           <TodoItem key={todo.id} todo={todo} 
           markComplete={props.markComplete} 
           delTodo={props.delTodo} 
           setUpdate={props.setUpdate}
           />
       )} 
    </ul>
  )
}

