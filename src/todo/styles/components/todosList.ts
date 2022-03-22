import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { darkTheme } from "../theme";

export const TextFieldList = styled(TextField)(({ theme }) => ({
  "& .MuiInput-underline:before": {
    borderBottomColor: theme.palette.secondary.main,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.secondary.light,
  },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: theme.palette.secondary.main,
  },
  "& .MuiInput-underline:not(:focus)": {
    borderBottomColor: theme.palette.secondary.light,
  },
}));

export const useStyles = makeStyles((theme: typeof darkTheme) => ({
  boxEsp: {
    borderRadius: "3%",
    backgroundColor: theme.palette.primary.main,
    margin: "14px",
  },
  textFied: {
    marginLeft: 20,
    marginTop: 20,
  },
}));
