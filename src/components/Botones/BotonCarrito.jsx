import StyledBadge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const BotonCarrito = () => {
    return (
            <StyledBadge badgeContent={0} color="secondary">
                <ShoppingCartIcon sx={{ fontSize: '1.7rem' }} />
            </StyledBadge>
    )
}

export default BotonCarrito;