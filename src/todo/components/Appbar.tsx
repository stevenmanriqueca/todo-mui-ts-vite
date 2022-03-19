import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Appbar = (): JSX.Element => {
  return (
    <AppBar sx={{ backgroundColor: "primary.main", display: "flex" }} position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">TodoApp - TS</Typography>
        <IconButton
          size="large"
          aria-label="search"
          color="inherit"
          sx={{ align: "flex-end" }}
        >
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
