import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const TextFieldTodo = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.secondary.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.secondary.light,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.secondary.light,
    },
  },
}));

export const useStyles = makeStyles({
  box: {
    display: "flex",
    justifyContent: "center",
    mx: 1,
    my: 4,
  },
  iconButton: {
    ml: 0.5,
  },
});
