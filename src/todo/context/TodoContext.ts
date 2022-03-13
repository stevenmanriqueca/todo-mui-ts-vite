import { createContext } from "react";
import { TodoState } from "../interfaces/context/interfaces";

export type TodoContextProps = {
	todoState: TodoState;
};

export const TodoContext = createContext<TodoContextProps>(
	{} as TodoContextProps
);
