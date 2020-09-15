import React, { useContext } from 'react'

import { TodoContext } from './TodoContext'



export const TodoItem = (props) => {
    const [todos, setTodo] = useContext(TodoContext);

    const { todo, index } = props;

    const removeTodo = (props) => {
        let todolist = [...todos];
        todolist.splice(index, 1);
        setTodo(
            todolist
        );
    }
    return (
        <div>
            <span>{todo.text}</span>
            <button onClick={removeTodo}>X</button>
        </div>
    )
}