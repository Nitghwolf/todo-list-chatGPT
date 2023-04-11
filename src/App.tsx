import React from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container">
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
