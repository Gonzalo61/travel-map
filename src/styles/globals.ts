import { createTheme, Theme } from "@material-ui/core";
import { esES } from "@material-ui/core/locale";

const themeSpacing = 8;
const primary = {
  main: "#2D85C4", // "#406D96",
  light: "#A8D0DA",
  dark: "#2F3A56",
};
const grey = {
  "10": "#F2F3F6",
  "50": "#ECEFF1",
  "100": "#CFD8DC",
  "200": "#B0BEC5",
  "300": "#90A4AE",
  "400": "#78909C",
  "500": "#607D8B",
  "600": "#546E7A",
  "700": "#455A64",
  "800": "#37474F",
  "900": "#263238",
};
const secondary = {
  main: "#E2474B",
  light: "#F89344",
  dark: "#FF642F",
  contrastText: "#fff",
};
const theme: Theme = createTheme(
  {
    palette: {
      primary,
      secondary,
      grey,
    },
    spacing: themeSpacing,
    typography: {
      fontFamily: "'Open Sans', sans-serif",
      allVariants: {
        color: grey[900],
      },
    },
    overrides: {
      MuiInputBase: {
        input: {
          padding: "6px 0 6px",
        },
      },
    },
  },
  esES
);

export default theme;
