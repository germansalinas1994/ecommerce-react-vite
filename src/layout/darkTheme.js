import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#444654',
      light: '#42a5f5',
      dark: '#4B4E4F',
      contrastText: '#fff',
    },
    secondary: {
      main: '#CCC8AA',
    },
    background: {
      default: '#F1EFEF',
    },
  },
});



export default darkTheme;