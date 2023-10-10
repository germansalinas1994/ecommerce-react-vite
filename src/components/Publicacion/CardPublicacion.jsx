import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const CardPublicacion = ({ publicaciones }) => {
    // Helper function to format price with commas and decimals
    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(price);
    }

    // Helper function to calculate price per installment
    const calculateInstallment = (price) => {
        return formatPrice(price / 12);
    }

    return (
        <>
        
            {publicaciones.map((p) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={p.idPublicacion}>
                    <Card
                        sx={{
                            margin: '20px',
                            cursor: 'pointer',
                            borderRadius:5,
                            '&:hover': { boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)' }
                        }}
                    >
                        <Link to={`/publicacion/${p.idPublicacion}`} style={{ color: 'inherit', textDecoration: 'none' }}>

                            <CardActionArea
                                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >

                                <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', mt:3, mb:2}}>
                                    {p.idProductoNavigation.nombre}
                                </Typography>

                                <CardMedia
                                    component="img"
                                    image={p.idProductoNavigation.urlImagen}
                                    sx={{ width: '80%', height: 'auto' }}
                                />
                    



                        <CardContent>

                            <Typography align="center" color="primary" sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>
                                {formatPrice(p.precio)}
                            </Typography>
                            <Typography align="center" color="textSecondary" sx={{ fontSize: '1.0rem' }}>
                                Hasta 12 cuotas sin interés de <b>{calculateInstallment(p.precio)}</b>
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        </Link>
                    </Card>
                </Grid >
            ))}
        </>
    )
}

export default CardPublicacion;
