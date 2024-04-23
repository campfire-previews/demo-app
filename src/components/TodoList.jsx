import Todos from "./Todos";
import TodoForm from "./TodoForm";
import TodoListHeader from "./TodoListHeader";

function TodoList({ 
	todos, 
	handleCreateTodo, 
	handleDeleteTodo,
	handleToggleTodo,
	handleCompleteAll, 
	}) {
  return (
    <div id="todo-list-container">
      <TodoListHeader 
				handleCompleteAll={handleCompleteAll} 
			/>
      
			<Todos 
				todos={todos} 
				handleDeleteTodo={handleDeleteTodo} 
				handleToggleTodo={handleToggleTodo} 
			/>
			
			<TodoForm 
				handleCreateTodo={handleCreateTodo} 
			/>
    </div>
  );
}

export default TodoList;
