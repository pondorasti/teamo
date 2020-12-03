import { createMuiTheme } from "@material-ui/core/styles"

const defaultTheme = {
  palette: {
    primary: {
      // primary
      main: "#7800D7",
      dark: "#7800D7",
    },
    secondary: {
      // secondary
      main: "#AAA3EB",
      dark: "#AAA3EB",
    },
    warning: {
      // tertiary
      main: "#4D287C",
      dark: "#4D287C",
    },
    error: {
      // error
      main: "#FF453A99",
      dark: "#FF453A99",
      light: "#FF453A1A", // error background
    },
    info: {
      // blue
      main: "#0A84FF",
      dark: "#0A84FF",
    },
    success: {
      // green
      main: "#23E036",
      dark: "#23E036",
    },

    text: {
      primary: "#FFFFFFE6", // label
      secondary: "#FFFFFF66", // secondary label
      disabled: "#FFFFFF40", // tertiary label
      hint: "#FFFFFF40", // tertiary label
    },

    grey: {
      500: "#505050", // border color
      600: "#464646", // quaternary background
      700: "#2F2F30", // tertiary background
      800: "#1E1E1E", // secondary background
      900: "#141414", // background
    },

    action: {
      hoverOpacity: 0.2,
    },

    divider: "#FFFFFF26", // separator

    tonalOffset: 0,
    contrastThreshold: 0,

    type: "dark",
  },
  shadows: Array(25).fill("none"),
  typography: {
    h1: {
      // H1
      fontWeight: "500",
      fontSize: "2.25rem",
      lineHeight: "100%",
      letterSpacing: "0.009375rem",
    },
    h2: {
      // H2
      fontWeight: "500",
      fontSize: "1.5rem",
      lineHeight: "100%",
      letterSpacing: "0.009375rem",
    },
    h4: {
      // headline 1
      fontWeight: "400",
      fontSize: "1.375rem",
      lineHeight: "100%",
      letterSpacing: "0.009375rem",
    },
    h5: {
      // headline 1
      fontWeight: "500",
      fontSize: "1.0625rem",
      lineHeight: "100%",
      letterSpacing: "0.009375rem",
    },
    h6: {
      // headline 2
      fontWeight: "500",
      fontSize: "0.9375rem",
      lineHeight: "100%",
      letterSpacing: "0.009375rem",
    },
    body1: {
      // body
      fontWeight: "400",
      fontSize: "0.9375rem",
      lineHeight: "100%",
      letterSpacing: "0.009375rem",
    },
    body2: {
      // body
      fontWeight: "400",
      fontSize: "0.9375rem",
      lineHeight: "100%",
      letterSpacing: "0.009375rem",
    },
    button: {
      // button
      textTransform: "none",
      fontWeight: "700",
      fontSize: "0.9375rem",
      lineHeight: "100%",
      letterSpacing: "0rem",
    },
    caption: {
      // caption
      fontWeight: "400",
      fontSize: "0.75rem",
      lineHeight: "1rem",
      letterSpacing: "0.025rem",
    },
  },
  transitions: {
    duration: {
      shortest: 250, // IconButton
      shorter: 200,
      short: 250, // CardActionArea
    },
  },
}

const TMTheme = createMuiTheme({
  ...defaultTheme,
  overrides: {
    MuiDialog: {
      paper: {
        backgroundColor: defaultTheme.palette.grey[800],
        borderRadius: 24,
        padding: "32px 24px",
      },
    },
    MuiDialogTitle: {
      root: {
        display: "flex",
        justifyContent: "center",
        padding: 0,
        fontWeight: defaultTheme.typography.h4.fontWeight,
        fontSize: defaultTheme.typography.h4.fontSize,
        lineHeight: defaultTheme.typography.h4.lineHeight,
        letterSpacing: defaultTheme.typography.h4.letterSpacing,
      },
    },
    MuiDialogContent: {
      root: {
        padding: "0px 16px 24px 16px ",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
  },
})

export default TMTheme
