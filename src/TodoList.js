import React, { useContext } from 'react'
import { TodoItem } from './TodoItem'
import { TodoContext } from './TodoContext'

export const TodoList = () => {
    const [todos, setTodo] = useContext(TodoContext);
    return (
        <>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} index={index} />
            ))}
        </>
    )
}
