import { Card,CardMedia } from "@mui/material";

const CardProducto = ({ productos }) => {
    //Que hace el Dispatch?, el dispatch es el que ejecuta las acciones, es decir, el que ejecuta el reducer
    //el reducer es el que se encarga de cambiar el estado de la aplicacion

    return (
        <Card>


            {productos.map((producto) => (
                <h2>
                    {producto.nombre}
                </h2>
                // <CardMedia
                //     component="img"
                //     height="140"
                //     // image={producto.}
                //     alt={producto.nombre}
                // >
                //     Producto prueba
                // </CardMedia>
            ))
            }

        </Card>
    )
}
export default CardProducto;