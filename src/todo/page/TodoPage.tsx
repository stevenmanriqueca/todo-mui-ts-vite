import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Appbar from "../components/Appbar";
import InputTodo from "../components/InputTodo";
import TodoCompleted from "../components/TodoCompleted";
import TodoList from "../components/TodoList";

const TodoPage = (): JSX.Element => {
  return (
    <>
      <Appbar />
      <Box sx={{ m: 3 }}>
        <Grid container>
          <Grid item xs={12}>
            <InputTodo />
          </Grid>
          <Grid item xs={6}>
            <TodoList />
          </Grid>
          <Grid item xs={6}>
            <TodoCompleted />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TodoPage;
