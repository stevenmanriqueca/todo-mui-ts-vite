import { createContext } from "react";
import { State } from "../interfaces/context/interfaces";

export type TodoContextProps = {
	State: State;
	ChangeTheme: (darkTheme: boolean) => void;
	AddTodo: (id: number, description: string) => void;
	DeleteTodo: (id: number) => void;
	CompleteTodo: (id: number, description: string) => void;
	EditTodo: (id: number, description: string) => void;
};

export const TodoContext = createContext<TodoContextProps>(
	{} as TodoContextProps
);
