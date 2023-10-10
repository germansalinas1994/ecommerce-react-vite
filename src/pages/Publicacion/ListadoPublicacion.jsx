import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState, useEffect,useContext} from 'react';
import axios from 'axios';
import CardPublicacion from '../../components/Publicacion/CardPublicacion';
import { Card } from '@mui/material';
import ThemeContext from '../../layout/ThemeContext';


const ListadoPublicacion = () => {
    const apiLocalKey = import.meta.env.VITE_APP_API_KEY
    const { isDarkTheme } = useContext(ThemeContext);



    const [publicaciones, setPublicaciones] = useState([]);


    useEffect(() => {
        // Lógica para obtener las Publicaciones
        const fetchPublicaciones = async () => {
            // showLoadingModal();  // <-- Mostrar el modal antes de comenzar la operación asincrónica

            try {
                debugger;
                const response = await axios.get(apiLocalKey + '/publicaciones');
                debugger;
                setPublicaciones(response.data.result.data)
                // hideLoadingModal();  // <-- Ocultar el modal cuando la operación ha concluido

            } catch (error) {
                // hideLoadingModal();  // <-- Ocultar el modal cuando la operación ha concluido
                console.log(error);
            }
        };

        fetchPublicaciones();
    }, []);


    return (

        <Card container sx={{      
        backgroundColor: isDarkTheme ? '#000000' : '#F5F5F5', 
        borderRadius:2,
        padding: '20px 0', margin:10, display:'flex'}}>
    {/* //el flexgrow es para que se estire y ocupe todo el espacio disponible */}
            <Grid container spacing={2} justifyContent="center" sx={{display:'flex', maxWidth:1, backgroundColor:'primary', mt:5, mb:15}}>
                <CardPublicacion publicaciones={publicaciones} />
            </Grid>
        </Card>

    )
}

export default ListadoPublicacion