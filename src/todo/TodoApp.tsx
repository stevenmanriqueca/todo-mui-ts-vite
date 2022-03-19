import { ThemeProvider } from "@mui/material/styles";
import { TodoProvider } from "./context/TodoProvider";
import { darkTheme } from "./styles/theme";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import TodoPage from "./page/TodoPage";

const TodoApp = (): JSX.Element => {
  return (
    <TodoProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box sx={{ m: 0.8 }}>
          <TodoPage />
        </Box>
      </ThemeProvider>
    </TodoProvider>
  );
};

export default TodoApp;
