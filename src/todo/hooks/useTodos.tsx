import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const useTodos = () => {
  const { todoState, AddTodo, DeleteTodo, CompleteTodo } =
    useContext(TodoContext);
  const { todos, todosCompleted } = todoState;
  return { todos, todosCompleted, AddTodo, DeleteTodo, CompleteTodo };
};
