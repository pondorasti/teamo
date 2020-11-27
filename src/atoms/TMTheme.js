import { createMuiTheme } from '@material-ui/core/styles';

const TMTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#7800D7',
      dark: '#7800D7',
    },
    secondary: {
      main: '#AAA3EB',
      dark: '#AAA3EB',
    },
    warning: {
      main: '#4D287C',
      dark: '#4D287C',
    },
    error: {
      main: '#FF453A99',
      dark: '#FF453A99',
    },
    info: {
      main: '#0A84FF',
      dark: '#0A84FF',
    },

    text: {
      primary: '#FFFFFFE6',
      secondary: '#FFFFFF66',
      disabled: '#FFFFFF40',
      hint: '#FFFFFF40',
    },

    divider: '#FFFFFF26',

    tonalOffset: 0,
    contrastThreshold: 0,

    type: 'dark',
  },
  shadows: ['none'],
});

export default TMTheme;
