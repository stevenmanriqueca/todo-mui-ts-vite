export interface State {
	todos: Todo[];
	todosCompleted: Todo[];
	darkTheme: boolean;
}

export interface Todo {
	id: number;
	description: string;
}
