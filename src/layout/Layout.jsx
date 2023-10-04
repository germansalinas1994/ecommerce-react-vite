import React from 'react';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import darkTheme from './darkTheme';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NavBar from './NavBar';





const Layout = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Estado inicial en modo claro

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };


  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>

      <CssBaseline />
  
      {/* <Navbar /> */}
      <NavBar>
      <FormControlLabel
          control={
            <Switch
              checked={isDarkTheme}
              onChange={toggleTheme}
              icon={<Brightness7Icon />}
              checkedIcon={<Brightness4Icon />}
            />
          }
          label={isDarkTheme ? 'Tema Oscuro' : 'Tema Claro'}
        />
       
        {children}
      </NavBar>
      {/* Aquí puedes agregar componentes comunes, como una barra de navegación, un pie de página, etc. */}
      {/* <div>
        {children}
      </div> */}
      {/* Otras partes del layout, como un footer, etc. */}
    </ThemeProvider>
  );
};

export default Layout;
