import { ThemeProvider } from "@mui/material/styles";
import { darkThemePalette, lightThemePalette } from "../styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Appbar from "../components/Appbar";
import InputTodo from "../components/InputTodo";
import TodoCompleted from "../components/TodoCompleted";
import TodosList from "../components/TodosList";

import { useTodos } from "../hooks/useTodos";

const TodoPage = (): JSX.Element => {
  const { darkTheme } = useTodos();
  return (
    <ThemeProvider
      theme={darkTheme === false ? lightThemePalette : darkThemePalette}
    >
      <CssBaseline />
      <Box sx={{ m: 0.8 }}>
        <Appbar />
        <Box sx={{ m: 3 }}>
          <Grid container>
            <Grid item xs={12}>
              <InputTodo />
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={6}>
              <TodosList />
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={6}>
              <TodoCompleted />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default TodoPage;
