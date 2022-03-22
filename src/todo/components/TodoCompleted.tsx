import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { TransitionGroup } from "react-transition-group";
import Typography from "@mui/material/Typography";
import { Collapse } from "@mui/material";
import { useTodos } from "../hooks/useTodos";

const TodoCompleted = (): JSX.Element => {
  const { todosCompleted } = useTodos();

  return (
    <Box
      sx={{
        borderRadius: 3,
        backgroundColor: "primary.main",
        my: 1.5,
        mx: 1,
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{ m: 2, p: 2, color: "secondary.light" }}
      >
        Completed Todos
      </Typography>
      <List>
        <TransitionGroup>
          {todosCompleted.map(({ id, description }) => {
            return (
              <Collapse key={id}>
                <Typography
                  align="center"
                  variant="h5"
                  sx={{ m: 2, color: "secondary.main" }}
                >
                  {description}
                </Typography>
              </Collapse>
            );
          })}
        </TransitionGroup>
      </List>
    </Box>
  );
};

export default TodoCompleted;
