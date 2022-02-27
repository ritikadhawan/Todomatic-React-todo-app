import React from 'react'
import TodoItem from './TodoItem';

function TodoList(props) {
    console.log(props.todos);
  return (
    <div>
        {
            props.todos.map( todo => {
                return (<TodoItem {...todo} deleteTodo = {props.deleteTodo} markComplete = {props.markComplete}/>);
            })
        }
    </div>
  )
}

export default TodoList