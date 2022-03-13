import { Todo, TodoState } from "../interfaces/context/interfaces";

type todoAction =
	| { type: "addTodo"; payload: Todo }
	| { type: "deleteTodo"; payload: { id: number } }
	| { type: "editTodo"; payload: { id: number; description: string } };

export const todoReducer = (
	state: TodoState,
	action: todoAction
): TodoState => {
	switch (action.type) {
		case "addTodo":
			return {
				...state,
			};
		default:
			return state;
	}
};
