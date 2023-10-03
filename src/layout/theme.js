import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
     // Cambia estos valores según tus preferencias
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
    
    
    // ... otros colores y opciones
  },
  // ... otras opciones del tema
});



export default theme;