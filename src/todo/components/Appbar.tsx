import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTodos } from "../hooks/useTodos";
import { MouseEvent } from "react";

const Appbar = (): JSX.Element => {
  const { darkTheme, ChangeTheme } = useTodos();

  const handleChangeTheme = (e: MouseEvent<HTMLButtonElement>) => {
    ChangeTheme(!darkTheme);
  };

  return (
    <AppBar
      sx={{ backgroundColor: "primary.main", display: "flex" }}
      position="static"
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">TodoApp - TS</Typography>
        <IconButton
          size="large"
          aria-label="search"
          color="inherit"
          sx={{ align: "flex-end" }}
          onClick={handleChangeTheme}
        >
          {darkTheme === false ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
