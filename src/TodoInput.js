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


        let todolist = [...todos, {
            text: value,
            task_status: 0
        }];
        console.log(todolist);
        setTodo(todolist);
        setValue("")

    }

    return (
        <form onSubmit={updateList}>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
        </form>
    )
}
