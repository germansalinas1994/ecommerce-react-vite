import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardPublicacion from '../../components/Publicacion/CardPublicacion';

const ListadoPublicacion = () => {
    const apiLocalKey = import.meta.env.VITE_APP_API_KEY


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
        //el flexgrow es para que se estire y ocupe todo el espacio disponible
        <Grid container spacing={3} justifyContent="center">
            <CardPublicacion publicaciones={publicaciones} />
        </Grid>
    )
}

export default ListadoPublicacion