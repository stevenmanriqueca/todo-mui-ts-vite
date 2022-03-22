import { createTheme } from "@mui/material/styles";

export const lightThemePalette = createTheme({
	palette: {
		background: {
			default: "#c5cae9",
		},
		primary: {
			dark: "#3F51B5",
			main: "#e8eaf6",
			light: "#c5cae9",
		},
		secondary: {
			main: "#1a237e",
			light: "#1a237e",
		},
	},
	typography: {
		fontFamily: ["Roboto"].join(","),
	},
});

export const darkThemePalette = createTheme({
	palette: {
		background: {
			default: "#0B163E",
		},
		primary: {
			dark: "#0B163E",
			main: "#1E3D6E",
			light: "#6CE1CF",
		},
		secondary: {
			main: "#75E3F0",
			light: "#EEF4EA",
		},
	},
	typography: {
		fontFamily: ["Roboto"].join(","),
	},
});
