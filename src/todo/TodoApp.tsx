import { TodoProvider } from "./context/TodoProvider";

const TodoApp = (): JSX.Element => {
  return (
    <TodoProvider>
      <h1>Todo App</h1>
    </TodoProvider>
  );
};

export default TodoApp;
