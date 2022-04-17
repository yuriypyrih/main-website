import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#6EE2E4',
      main: '#00B6BE',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#FAF6EE',
      main: '#EDDFC3',
      dark: '#E6D2AA',
      contrastText: 'rgba(0, 0, 0, 0.81)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.81)',
      secondary: '#FFFFFF',
      disabled: '#8B8B8B',
    },
    error: {
      light: '#EDA7A9',
      main: '#DA4E53',
      dark: '#D2232A',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FAAF1F',
      contrastText: '#FFFFFF',
    },
    success: {
      light: '#F0FFF4',
      main: '#28A745',
    },
    background: {
      default: '#FFFDFA',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: 'Nexa',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1115,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;
