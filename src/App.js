import { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "First Todo Item",
      completed: false
    }
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: uuidv4(),
      text,
      completed: false
    }

    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <TodoItem {...todos[0]}/>
    </div>
  );
}

export default App;
