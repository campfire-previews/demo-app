import React from 'react';
import '../App.css';

function TodoList() {
  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <ul className="todo-list">
        <li>Sleeping bags</li>
        <li>Marshmallows</li>
      </ul>
    </div>
  );
}

export default TodoList;
