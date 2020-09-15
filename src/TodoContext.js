import React, { useState, useContext, createContext } from 'react';

export const TodoContext = createContext();

export const Todoprovider = (props) => {
        const [todos, setTodo] = useState([
                {
                        text: 'jhas',
                        task_status: 0
                },
                {
                        text: 'jhas',
                        task_status: 0
                },
                {
                        text: 'jhas',
                        task_status: 0
                },
                {
                        text: 'jhas',
                        task_status: 0
                },
                {
                        text: 'jhas',
                        task_status: 0
                },
                {
                        text: 'jhas',
                        task_status: 0
                },
        ]

        );

        return (
                <TodoContext.Provider value={[todos,setTodo]}>
                        {props.children}
                </TodoContext.Provider>
        )
}
