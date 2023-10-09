import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const CardPublicacion = ({ publicaciones }) => {
    return (
        <>

            {publicaciones.map((p) => (
                <Grid item xs={1}  key={p.idPublicacion}> {/* Añadido el componente Grid aquí */}
                    <Card sx={{ margin: '20px' }}>
                        <CardActionArea
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        >
                            <Typography variant="h3" align="center">
                                {p.idProductoNavigation.descripcion}
                            </Typography>

                            <CardMedia
                                component="img"
                                image={p.idProductoNavigation.urlImagen}
                            />
                            <CardContent>
                                <Typography align="center">
                                    Precio : ${p.precio}
                                </Typography>

                                <Typography align="center">
                                    Stock : {p.stock}
                                </Typography>

                            </CardContent>

                        </CardActionArea>
                    </Card>
                </Grid>
            ))}

        </>
    )
}

export default CardPublicacion;
