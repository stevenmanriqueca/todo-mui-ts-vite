import { Todo, State } from "../interfaces/context/interfaces";

type todoAction =
	| { type: "changeTheme"; payload: boolean }
	| { type: "addTodo"; payload: Todo }
	| { type: "deleteTodo"; payload: { id: number } }
	| { type: "editTodo"; payload: { id: number; description: string } }
	| { type: "completeTodo"; payload: Todo };

export const todoReducer = (state: State, action: todoAction): State => {
	switch (action.type) {
		case "changeTheme":
			return {
				...state,
				darkTheme: action.payload,
			};
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

		case "editTodo":
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id ? action.payload : todo
				),
			};
		default:
			return state;
	}
};
