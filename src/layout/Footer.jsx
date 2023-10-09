import React, { useContext } from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ThemeContext from './ThemeContext';

const Footer = () => {
    const { isDarkTheme } = useContext(ThemeContext);
    const currentYear = new Date().getFullYear();

    return (
        <Grid container spacing={2} style={{ padding: '20px 0', backgroundColor: isDarkTheme ? '#333131' : '#EEEEEE' }}>
            <Grid item xs={12} md={4}>
                <Typography  align="right">© {currentYear} Ecommerce. Todos los derechos reservados</Typography>
            </Grid>
            <Grid item xs={12} md={6} align="right">
                <IconButton color="inherit" href="https://www.facebook.com/micomercio" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon />
                </IconButton>
                <IconButton color="inherit" href="https://www.twitter.com/micomercio" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon />
                </IconButton>
                <IconButton color="inherit" href="https://www.instagram.com/micomercio" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon />
                </IconButton>
                <IconButton color="inherit" href="https://www.linkedin.com/in/micomercio" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </IconButton>
            </Grid>
            <Grid item xs={12} md={4}>
                {/* Puedes agregar más contenido aquí si lo necesitas */}
            </Grid>
        </Grid>
    );
};

export default Footer;
