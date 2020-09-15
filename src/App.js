import React from 'react';
import { Todoprovider } from './TodoContext';
import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';

function App() {
  return (
    <Todoprovider>
      <div className="App">
        <TodoList></TodoList>
        <TodoInput></TodoInput>
      </div>
    </Todoprovider>


  );
}

export default App;
