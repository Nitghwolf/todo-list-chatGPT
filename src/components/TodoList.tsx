import React, { useState } from 'react';
import useStore from '../srore/store';
import '../styles/TodoList.css'

const TodoList = () => {
    const { todos, toggleTodo, deleteTodo } = useStore();
    const [showCompleted, setShowCompleted] = useState(true);

    const toggleShowCompleted = () => {
        setShowCompleted(!showCompleted);
    };

    const filteredTodos = showCompleted
        ? todos
        : todos.filter((todo) => !todo.completed);

    return (
        <>
            <button onClick={toggleShowCompleted} className={showCompleted ? 'showCompletedButton active' : 'showCompletedButton'}>
                {showCompleted ? 'Hide Completed' : 'Show Completed'}
            </button>
            <ul className='todo-list'>
                {filteredTodos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        <span
                            onClick={() => toggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)} className='delete-button'>X</button>
                    </li>
                ))}
            </ul>
        </>

    );
};

export default TodoList;
