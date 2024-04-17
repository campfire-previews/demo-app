import React from 'react';
import '../App.css';

function TodoList() {
  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <ul className="todo-list">
        <li>Sleeping bags</li>
        <li>Tent</li>
        <li>Marshmallows</li>
        <li>Graham crackers</li>
      </ul>
    </div>
  );
}

export default TodoList;
