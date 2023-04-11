import React, { useState } from 'react';
import useStore from '../srore/store';
import '../styles/AddTodoForm.css';

const AddTodoForm = () => {
    const { addTodo } = useStore();
    const [text, setText] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        text && addTodo(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter todo text"
                value={text}
                onChange={(event) => setText(event.target.value)}
                className="todo-input"
            />
            <button type="submit" className='add-todo-button'>Add Todo</button>
        </form>
    );
};

export default AddTodoForm;
