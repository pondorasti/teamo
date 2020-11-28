import { createMuiTheme } from '@material-ui/core/styles'

const TMTheme = createMuiTheme({
  palette: {
    primary: { // primary
      main: '#7800D7',
      dark: '#7800D7'
    },
    secondary: { // secondary
      main: '#AAA3EB',
      dark: '#AAA3EB'
    },
    warning: { // tertiary
      main: '#4D287C',
      dark: '#4D287C'
    },
    error: { // error
      main: '#FF453A99',
      dark: '#FF453A99',
      light: '#FF453A1A' // error background 
    },
    info: { // blue
      main: '#0A84FF',
      dark: '#0A84FF'
    },

    text: {
      primary: '#FFFFFFE6', // label
      secondary: '#FFFFFF66', // secondary label
      disabled: '#FFFFFF40', // tertiary label
      hint: 'FFFFFF40', // tertiary label
    },

    grey: {
      600: '#464646', // quaternary background
      700: '#2F2F30', // tertiary background
      800: '1E1E1E', // secondary background
      900: '#141414' // background
    },

    action: {
      hoverOpacity: 0.2
    },

    divider: '#FFFFFF26', // separator

    tonalOffset: 0,
    contrastThreshold: 0,

    type: 'dark'
  },
  shadows: ['none']
})

export default TMTheme