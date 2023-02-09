import { createTheme, Theme } from "@mui/material";

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

export const drawerWidth = 300;

export const backgroundColor = "#ccc";

export const appTheme = createTheme({
  palette: {
    background: {
      default: backgroundColor,
    },
  },
});
