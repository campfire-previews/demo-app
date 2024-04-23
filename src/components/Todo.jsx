import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

function Todo({ 
	id, 
	title, 
	complete,
	handleDeleteTodo,
	handleToggleTodo,
	}) {
	const onClickDeleteTodo = () => {
		handleDeleteTodo(id);
	}

	const onClickTodoCheckBox = () => {
		handleToggleTodo(id);
	} 

	return (
		<li key={id} className={`todo-container ${complete ? "complete": ""}`}>
			{ complete ? 
				<CheckBoxIcon 
					type="checkbox"
					className="todo-checkbox"
					onClick={onClickTodoCheckBox}
				/> :

				<CheckBoxOutlineBlankIcon
					type="checkbox"
					className="todo-checkbox"
					onClick={onClickTodoCheckBox}
				/>
			}
				
			<div className="todo-info">				
				<p className={`${complete ? "strikethrough" : ""}`}>{title}</p>
				<DeleteIcon className="delete-icon"
					onClick={onClickDeleteTodo} 
				/>
			</div>
		</li>
	)
}

export default Todo;