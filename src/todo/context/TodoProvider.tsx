import { useReducer } from "react";
import { State } from "../interfaces/context/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";

const INITIAL_STATE: State = {
  todos: [
    {
      id: 9876,
      description: "Hacer de comer",
    },
    {
      id: 12312,
      description: "Hacer ejercicio",
    },
    {
      id: 5555,
      description: "Hacer compras",
    },
  ],
  todosCompleted: [],
  darkTheme: false,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: Props) => {
  const [State, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  //Actions

  const ChangeTheme = (darkTheme: boolean): void => {
    dispatch({ type: "changeTheme", payload: darkTheme });
  };

  const AddTodo = (id: number, description: string): void => {
    dispatch({ type: "addTodo", payload: { id, description } });
  };

  const CompleteTodo = (id: number, description: string): void => {
    dispatch({ type: "completeTodo", payload: { id, description } });
  };

  const EditTodo = (id: number, description: string): void => {
    dispatch({ type: "editTodo", payload: { id, description } });
  };

  const DeleteTodo = (id: number): void => {
    dispatch({ type: "deleteTodo", payload: { id } });
  };

  return (
    <TodoContext.Provider
      value={{
        State,
        AddTodo,
        DeleteTodo,
        CompleteTodo,
        EditTodo,
        ChangeTheme,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
