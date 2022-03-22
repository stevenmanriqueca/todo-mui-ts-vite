import { FormEvent, KeyboardEvent, useRef } from "react";
import { TextFieldList } from "../styles/components/todosList";
import Box from "@mui/material/Box";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { useTodos } from "../hooks/useTodos";
import { useForm } from "../hooks/useForm";
import { useStyles } from "../styles/components/todosList";

interface IProps {
  id: number;
  description: string;
}

export const TodoInfo = ({ id, description }: IProps): JSX.Element => {
  const { DeleteTodo, CompleteTodo, EditTodo } = useTodos();
  const {
    input: { inputDescription },
    handleChange,
  } = useForm({ inputDescription: description });

  const handleSubmit = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      (event.target as HTMLInputElement).blur();
      EditTodo(id, inputDescription);
    }
  };

  const classes = useStyles();

  return (
    <Box sx={{ display: "flex" }}>
      <TextFieldList
        onKeyDown={handleSubmit}
        sx={{
          input: { color: "secondary.light" },
        }}
        autoComplete="off"
        className={classes.textFied}
        onChange={handleChange}
        name="inputDescription"
        fullWidth
        variant="standard"
        id="standard-basic"
        value={inputDescription}
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
  );
};
