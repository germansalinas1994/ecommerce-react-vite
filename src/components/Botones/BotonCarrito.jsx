import StyledBadge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCarrito } from '../Cart/CarritoProvider'; // Asegúrate de importar el hook correctamente


const BotonCarrito = () => {
    const { carrito } = useCarrito();
    const totalProductos = carrito.reduce((sum, producto) => sum + producto.cantidad, 0);
    
    return (
        <StyledBadge badgeContent={totalProductos} color="secondary">
            <ShoppingCartIcon sx={{ fontSize: '1.7rem' }} />
        </StyledBadge>
    );
    
}

export default BotonCarrito;