import { FormEvent, MouseEvent } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Close from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "../hooks/useForm";
import { TextFieldTodo, useStyles } from "../styles/components/inputTodo";
import { useTodos } from "../hooks/useTodos";

const InputTodo = (): JSX.Element => {
  const classes = useStyles();

  const { AddTodo } = useTodos();

  const {
    input: { inputTodo },
    handleChange,
    handleReset,
  } = useForm({ inputTodo: "" });

  const handleSubmit = (
    event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (inputTodo.length === 0) {
      return;
    } else {
      AddTodo(Date.now(), inputTodo);
      handleReset();
    }
  };

  return (
    <Box sx={{ borderRadius: 3, backgroundColor: "primary.main", p: 2 }}>
      <Typography
        variant="h2"
        align="center"
        sx={{ color: "secondary.light", my: 4 }}
      >
        Todo App
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box className={classes.box}>
          <TextFieldTodo
            fullWidth
            autoComplete="off"
            variant="outlined"
            name="inputTodo"
            value={inputTodo}
            onChange={handleChange}
            sx={{ input: { color: "secondary.light" } }}
            inputProps={{ style: { textAlign: "center" } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    color="secondary"
                    onClick={() => handleReset()}
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <Close />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <IconButton
            className={classes.iconButton}
            color="secondary"
            size="large"
            onClick={handleSubmit}
          >
            <SendIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </form>
    </Box>
  );
};

export default InputTodo;
