import { Todo, TodoState } from "../interfaces/context/interfaces";

type todoAction =
	| { type: "addTodo"; payload: Todo }
	| { type: "deleteTodo"; payload: { id: number } }
	| { type: "editTodo"; payload: { id: number; description: string } }
	| { type: "completeTodo"; payload: Todo };

export const todoReducer = (
	state: TodoState,
	action: todoAction
): TodoState => {
	switch (action.type) {
		case "addTodo":
			return {
				...state,
				todos: [action.payload, ...state.todos],
			};
		case "completeTodo":
			return {
				...state,
				todosCompleted: [action.payload, ...state.todosCompleted],
				todos: state.todos.filter((todo) => action.payload.id !== todo.id),
			};

		case "deleteTodo":
			return {
				...state,
				todos: state.todos.filter((todo) => action.payload.id !== todo.id),
			};
		default:
			return state;
	}
};
