import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
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
    margin: "10px 0px",
  },
  iconButton: {
    margin: "0 8px 0 0",
  },
});
