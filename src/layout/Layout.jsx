import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
// import darkTheme from './darkTheme';
import NavBar from './NavBar';





const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      {/* <Navbar /> */}
      <NavBar>{children}</NavBar>
      {/* Aquí puedes agregar componentes comunes, como una barra de navegación, un pie de página, etc. */}
      {/* <div>
        {children}
      </div> */}
      {/* Otras partes del layout, como un footer, etc. */}
    </ThemeProvider>
  );
};

export default Layout;
