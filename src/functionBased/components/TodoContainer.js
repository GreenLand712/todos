import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';
import uuid from 'uuid';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';
import Navbar from './Navbar';

export default function TodoContainer() {
    const [todos, setTodos] = useState(initialTodos())

    function initialTodos(){
        const temp = localStorage.getItem('todos')
        const loadedTodos = JSON.parse(temp)
        return loadedTodos || []
    }

    const markComplete = (id) => {
        setTodos(prevState =>
            prevState.map(todo => {
                if(todo.id === id){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                    // todo.completed = !todo.completed
                }
                return todo;
            })
        )
    }

    const delTodo = (id) => {
        setTodos(
            [...todos.filter(todo => todo.id !== id)]
        )
    }

    const addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false
        }
        setTodos([...todos, newTodo])
    }

    const setUpdate = (title,id) => {
        setTodos(
            todos.map(todo => {
                if(todo.id === id){
                    todo.title = title
                }
                return todo
            }))
    }

    useEffect(() => {
        const temp = JSON.stringify(todos)
        localStorage.setItem('todos', temp)
    }, [todos])

    return (
        <>
        <Navbar />
        <Switch>
        <Route exact path='/'>
        <div className='container'>
            <div className='inner'>
                <Header /> 
                <React.Fragment>
                    <InputTodo addTodo={addTodo} />
                    <TodoList todos = {todos} 
                    markComplete={markComplete} 
                    delTodo={delTodo} 
                    setUpdate = {setUpdate}
                    />
                </React.Fragment>
            </div>
        </div>
        </Route>
        <Route path='/about' component={About} />
        <Route path='*' component={NotMatch} />
        </Switch>
        </>  
    );
}
