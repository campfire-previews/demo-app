import React from 'react';
import backgroundImage from './images/campfire-background.jpg';
import TodoList from './components/TodoList'; 
import './App.css';

function App() {
  return (
    <div className="app-background">
      <header><h1>Demo App</h1></header>
      <TodoList />
    </div>
  );
}

export default App;
