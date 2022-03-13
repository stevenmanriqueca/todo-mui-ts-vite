import { useReducer } from "react";
import { TodoState } from "../interfaces/context/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";

const INITIAL_STATE: TodoState = {
  todos: [
    {
      id: 123124123123123,
      description: "Todo Inicial",
    },
  ],
  completed: 0,
  pending: 0,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: Props) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  return (
    <TodoContext.Provider value={{ todoState }}>
      {children}
    </TodoContext.Provider>
  );
};
