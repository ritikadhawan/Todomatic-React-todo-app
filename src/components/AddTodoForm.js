import React, { useState } from 'react'

function AddTodoForm(props) {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.addTodo(text);
        setText('');
    }
    return (
    <div>
        <form onSubmit={onSubmit}>
            <input
                type = "text" 
                name = "text" 
                placeholder = "Add Todo..."
                onChange = {onChange}
                value = {text}
            />
            <button type='submit'>Submit</button>
        </form>
    </div>
    )
}

export default AddTodoForm