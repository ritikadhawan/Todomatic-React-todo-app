import React from 'react'

export default function TodoItem(props) {
  return (
      <div className='todo-item'>
          <input type = {'checkbox'}/>
          <div>{ props.text }</div>
          <button>X</button>
      </div>
    
  )
}
