import React from 'react'

export default function TodoItem(props) {
  return (
      <div className='todo-item'>
          <input type = {'checkbox'} onClick = {() => props.markComplete(props.id)}/>
          <div style = {{textDecorationLine: props.completed ? 'line-through' : 'none'}}>{ props.text }</div>
          <button onClick = {() =>  props.deleteTodo(props.id)}>X</button>
      </div>
    
  )
}
