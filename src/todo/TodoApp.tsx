import { TodoProvider } from "./context/TodoProvider";
import TodoPage from "./page/TodoPage";

const TodoApp = (): JSX.Element => {
  return (
    <TodoProvider>
      <TodoPage />
    </TodoProvider>
  );
};

export default TodoApp;
