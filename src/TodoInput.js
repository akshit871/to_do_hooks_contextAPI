import React, { useState, useContext } from 'react'
import { TodoContext } from './TodoContext'

export const TodoInput = () => {
    const [value, setValue] = useState("");
    const [todos, setTodo] = useContext(TodoContext);



    const updateList = (e) => {
        e.preventDefault();
        if (!value) {
            return;
        }

        let todo = {
            text: value,
            task_status: 0
        }
        setValue("")
        let todolist = [...todos, { todo }];
        setTodo(todolist);
    }

    return (
        <form onSubmit={updateList}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    )
}
