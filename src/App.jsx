import { useState } from 'react';
import backgroundImage from './images/campfire-background.jpg';
import TodoList from './components/TodoList'; 
import './App.css';

function App() {
	const [ todos, setTodos ] = useState([
		{ id: "1", title: "Sleeping bags", complete: false },
		{ id: "2", title: "Tent", complete: false },
		{ id: "3", title: "Marshmallows", complete: false },
		{ id: "4", title: "Graham crackers", complete: false },
	]);

	const handleCreateTodo = (newTodo) => {
		setTodos(todos => todos.concat(newTodo));
	}

	const handleDeleteTodo = (todoID) => {
		setTodos(todos => todos.filter(todo => todo.id !== todoID));
	}

	const handleToggleTodo = (todoId) => {
		setTodos(todos => {
			const updatedTodos = todos.map(todo => {
				return todo.id === todoId ? ({ ...todo, complete: !todo.complete }): todo
			});

			return updatedTodos;
		});
	}

	const handleCompleteAll = () => {
		setTodos(todos => {
			const updatedTodos = todos.map(todo => ({...todo, complete: true}));
			return updatedTodos; 
		})
	}

  return (
    <main>
			<h1>Demo App</h1>
      <TodoList 
				todos={todos} 
				handleCreateTodo={handleCreateTodo}
				handleDeleteTodo={handleDeleteTodo}
				handleToggleTodo={handleToggleTodo}
				handleCompleteAll={handleCompleteAll}
			/>
    </main>
  );
}

export default App;
