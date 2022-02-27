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

  const deleteTodo = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)]);
  }

  const markComplete = (id) => {
    setTodos(todos.map(todo => {
      if(id === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }));
  }

  return (
    <div className="App">
      <TodoItem {...todos[0]} deleteTodo = { deleteTodo } markComplete = {markComplete}/>
    </div>
  );
}

export default App;
