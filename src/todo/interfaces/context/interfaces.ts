export interface TodoState {
	todos: Todo[];
	todosCompleted: Todo[];
}

export interface Todo {
	id: number;
	description: string;
}
