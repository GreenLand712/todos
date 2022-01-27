import React, { Component } from 'react';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';
import uuid from 'uuid';

export class TodoContainer extends Component {
    state = {
        todos: [
        {
            id: uuid.v4(),
            title: 'Listen effortless English',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'Study American Accent',
            completed:false
        },
        {
            id: uuid.v4(),
            title: 'Study about React',
            completed: false
        }
    ]}

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                    // todo.completed = !todo.completed
                }
                return todo;
            })
        })
    }

    delTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
    }

    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    setUpdate = (title,id) => {
        this.setState({todos: this.state.todos.map(todo => {
            if(todo.id === id){
                todo.title = title
            }
            return todo
        })})
    }

    componentDidUpdate(prevPros, prevState){
        if(prevState !== this.state.todos){
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem('todos',temp)
        }    
    }

    componentDidMount(){
        const temp = localStorage.getItem('todos')
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos){
            this.setState({
                todos: loadedTodos
            })
        }
    }

    render() {
    return (
        <div className='container'>
            <div className='inner'>
                <Header />
                <InputTodo addTodo={this.addTodo} />
                <TodoList todos = {this.state.todos} 
                markComplete={this.markComplete} 
                delTodo={this.delTodo} 
                setUpdate = {this.setUpdate}
                />
            </div>
        </div>
    );
  }
}

export default TodoContainer;
