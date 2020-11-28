import { createMuiTheme } from '@material-ui/core/styles';

const TMTheme = createMuiTheme({
  palette: {
    primary: { // primary
      main: '#7800D7',
      dark: '#7800D7',
    },
    secondary: { // secondary
      main: '#AAA3EB',
      dark: '#AAA3EB',
    },
    warning: { // tertiary
      main: '#4D287C',
      dark: '#4D287C',
    },
    error: { // error
      main: '#FF453A99',
      dark: '#FF453A99',
    },
    info: { // blue
      main: '#0A84FF',
      dark: '#0A84FF',
<<<<<<< HEAD
    },
    success: { // green
      main: '#23E036',
      dark: '#23E036'
=======
>>>>>>> atom-textfield
    },

    text: {
      primary: '#FFFFFFE6',
      secondary: '#FFFFFF66',
      disabled: '#FFFFFF40',
      hint: '#FFFFFF40',
<<<<<<< HEAD
    },

    grey: {
      600: '#464646', // quaternary background
      700: '#2F2F30', // tertiary background
      800: '#1E1E1E', // secondary background
      900: '#141414' // background
    },

    action: {
      hoverOpacity: 0.2
=======
>>>>>>> atom-textfield
    },

    divider: '#FFFFFF26', // separator

    tonalOffset: 0,
    contrastThreshold: 0,

    type: 'dark',
  },
  shadows: ['none'],
});

export default TMTheme;
