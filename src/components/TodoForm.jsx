import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoForm({ handleCreateTodo }) {
	const [ titleInput, setTitleInput ] = useState(""); 

	const handleSubmitForm = (e) => {
		e.preventDefault();

		const newTodo = {
			id: uuidv4(),
			title: titleInput,
			complete: false,
		}

		handleCreateTodo(newTodo)
		setTitleInput("")
	}

	const handleTitleInputChange = (e) => {
		e.preventDefault();

		setTitleInput(e.target.value);
	}

  return (
    <form onSubmit={handleSubmitForm}>
			<label htmlFor="title-input"> Enter a new todo item:</label>
			<input 
				id={"title-input"}
				type="text" 
				onChange={handleTitleInputChange} 
				value={titleInput}
				placeholder={"Something to do"}
			/>
			<button
				id="add-button"
				type="submit" 
			> Add </button>
		</form>
  );
}

export default TodoForm;
