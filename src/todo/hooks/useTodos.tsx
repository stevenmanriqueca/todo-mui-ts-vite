import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const useTodos = () => {
  const {
    State,
    AddTodo,
    DeleteTodo,
    CompleteTodo,
    EditTodo,
    ChangeTheme,
  } = useContext(TodoContext);
  const { todos, todosCompleted, darkTheme } = State;
  return {
    todos,
    todosCompleted,
    AddTodo,
    DeleteTodo,
    CompleteTodo,
    EditTodo,
    ChangeTheme,
    darkTheme,
  };
};
