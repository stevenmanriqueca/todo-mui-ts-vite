export interface TodoState {
	todos: Todo[];
	completed: number;
	pending: number;
}

export interface Todo {
	id: number;
	description: string;
}
