import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


const apiLocalKey = import.meta.env.VITE_APP_API_KEY;

const Publicacion = () => {
    const { id } = useParams();
    const [publicacion, setPublicacion] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const arrayQuantity = [1, 2, 3, 4, 5, 6];


    useEffect(() => {
        fetchPublicacion();
    }, []);

    const fetchPublicacion = async () => {
        try {
            let idPublicacion = parseInt(id);
            const response = await axios.get(apiLocalKey + '/publicacion/' + idPublicacion);
            setPublicacion(response.data.result.data);
        } catch (error) {
            console.log(error);
        }
    }



    // Helper function to format price with commas and decimals
    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(price);
    }

    const calculateInstallment = (price) => {
        return formatPrice(price / 12);
    }

    return (
        <Grid container spacing={3} justifyContent="center">
            {publicacion && (
                <Grid item xs={12} sm={10} md={8} lg={8}>
                    <Card elevation={10} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: 50, marginTop: 5, borderRadius:'15px'}}>
                        <Grid container spacing={2}>
                        <Grid item xs={12} sm={10} md={8} lg={6}>
                                    <CardMedia
                                        component="img"
                                        height="100%"  // Ajuste para que ocupe todo el espacio disponible en altura
                                        width="100%"
                                        image={publicacion.idProductoNavigation.urlImagen}
                                        alt={publicacion.idProductoNavigation.descripcion}
                                        sx={{ marginRight: '20px', flex: 1 }} // flex: 1 hace que el componente ocupe todo el espacio disponible
                                    />
                            </Grid>
                            <Grid item xs={12} sm={10} md={8} lg={6}>
                                <Box padding={2} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <Typography variant="h4" fontWeight="bold">{publicacion.idProductoNavigation.nombre}</Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        Categoria: {publicacion.idProductoNavigation.idCategoriaNavigation.nombre}
                                    </Typography>
                                    <Typography variant="h3" color="primary" sx={{ marginTop: 1 }}>
                                        {formatPrice(publicacion.precio)}
                                    </Typography>
                                    <Box display="flex" alignItems="center" flexWrap="wrap" width="100%">
                                        <Typography align="left" color="textSecondary" sx={{ fontSize: '1.2rem' }}>
                                            Hasta <span style={{ fontWeight: 'bold' }}>12 cuotas</span> sin interés de&nbsp;
                                        </Typography>
                                        <Typography align="left" color="primary" sx={{ fontSize: '1.4rem', fontWeight: 'bold', marginLeft: '0.5rem' }}>
                                            {calculateInstallment(publicacion.precio)}
                                        </Typography>
                                    </Box>


                                    <FormControl fullWidth variant="outlined" sx={{ maxWidth: '60%', marginTop: 3 }}>
                                        <InputLabel>Cantidad</InputLabel>
                                        <Select
                                            value={selectedQuantity}
                                            onChange={(event) => setSelectedQuantity(event.target.value)}
                                            label="Cantidad"
                                        >
                                            {arrayQuantity.map((number) => (
                                                <MenuItem key={number} value={number}>
                                                    {number}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        <Typography variant="body1" color="textSecondary">
                                            Unidades disponibles: {publicacion.stock}
                                        </Typography>
                                    </FormControl>
                                    <Box mt={2} display="flex" flexDirection="column" gap={1} sx={{ maxWidth: '60%' }} mb={10}>
                                        <Button variant="outlined" color="primary" fullWidth sx={{ height: '65px', marginBottom: 1 }}>
                                            Ver medios de pago
                                        </Button>
                                        <Button variant="contained" color="primary" fullWidth sx={{ height: '65px' }}>
                                            Comprar ahora
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        <CardContent sx={{marginTop:15, marginBottom:15}}> 
                            <Typography variant="h6">Especificaciones técnicas:</Typography>
                            <Typography variant="body1" color="textSecondary">
                                {publicacion.idProductoNavigation.descripcion}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            )}
        </Grid>
    )
}

export default Publicacion;