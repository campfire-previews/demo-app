import Todo from "./Todo"

function Todos({ todos, handleDeleteTodo, handleToggleTodo }) {
	const sortByTitle = (todoA, todoB) => {
		todoA = todoA.toLowerCase();
		todoB = todoB.toLowerCase();
		if (todoA.title < todoB.title) {
			return -1;
		} else if (todoA.title > todoB.title) {
			return 1;
		} else {
			return 0;
		}
	}

	const sortTodosByCompletion = (todos) => {
		const incompleteTodos = todos.filter(todo => !todo.complete);
		incompleteTodos.sort(sortByTitle);

		const completeTodos = todos.filter(todo => todo.complete);
		completeTodos.sort(sortByTitle);

		return [ ...incompleteTodos, ...completeTodos];
	}


  return (
    <ul id="todos-container">
			{ sortTodosByCompletion(todos).map(({ id, title, complete }) => (<Todo key={id}
					id={id}
					title={title}
					complete={complete}
					handleDeleteTodo={handleDeleteTodo}
					handleToggleTodo={handleToggleTodo}
				/>)
			)}
    </ul>
  );
}

export default Todos;