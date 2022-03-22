import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { TransitionGroup } from "react-transition-group";
import { useTodos } from "../hooks/useTodos";
import { useStyles } from "../styles/components/todosList";
import { TodoInfo } from "./TodoInfo";

const TodoList = (): JSX.Element => {
  const { todos } = useTodos();

  const classes = useStyles();

  return (
    <Box className={classes.boxEsp}>
      <List>
        <Typography
          variant="h3"
          align="center"
          sx={{ m: 2, color: "secondary.light" }}
        >
          Todo List
        </Typography>
        <TransitionGroup>
          {todos.map((todo) => {
            return (
              <Collapse key={todo.id}>
                <TodoInfo {...todo} />
              </Collapse>
            );
          })}
        </TransitionGroup>
      </List>
    </Box>
  );
};

export default TodoList;
