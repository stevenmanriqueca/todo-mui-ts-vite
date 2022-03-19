import { createContext } from "react";
import { TodoState } from "../interfaces/context/interfaces";

export type TodoContextProps = {
	todoState: TodoState;
	AddTodo: (id: number, description: string) => void;
	DeleteTodo: (id: number) => void;
	CompleteTodo: (id: number, description: string) => void;
};

export const TodoContext = createContext<TodoContextProps>(
	{} as TodoContextProps
);
