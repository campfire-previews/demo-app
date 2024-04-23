function TodoListHeader({ handleCompleteAll }) {
	const handleOnClick = (e) => {
		e.preventDefault();
		handleCompleteAll();
	}

  return (
		<div id="todo-list-header">
			<h1>Packing List </h1>
			<button onClick={handleOnClick}>Complete All</button>
		</div>
  );
}

export default TodoListHeader;
