import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { TransitionGroup } from "react-transition-group";
import { useTodos } from "../hooks/useTodos";
import { Stack } from "@mui/material";

const TodoList = (): JSX.Element => {
  const { todos, DeleteTodo, CompleteTodo } = useTodos();
  return (
    <Box
      sx={{
        borderRadius: 3,
        backgroundColor: "primary.main",
        my: 1.5,
        mx: 1,
      }}
    >
      <List>
        <Typography variant="h3" align="center" sx={{ m: 2, color:"secondary.light" }}>
          Todo List
        </Typography>
        <TransitionGroup>
          {todos.map(({ id, description }) => {
            return (
              <Collapse key={id}>
                <Box sx={{ display: "flex" }}>
                  <TextField
                    disabled
                    sx={{
                      ml: 5,
                      mr: -2,
                      my: 2,
                    }}
                    fullWidth
                    variant="standard"
                    id="standard-basic"
                    defaultValue={description}
                  />
                  <Stack direction="row" sx={{ m: 2 }}>
                    <IconButton
                      color="secondary"
                      size="large"
                      onClick={() => CompleteTodo(id, description)}
                    >
                      <CheckIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton
                      onClick={() => DeleteTodo(id)}
                      color="secondary"
                      size="large"
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </Stack>
                </Box>
              </Collapse>
            );
          })}
        </TransitionGroup>
      </List>
    </Box>
  );
};

export default TodoList;
