import { Button } from "@mui/material";




const BotonAgregar = ({ onClick }) => {

return(


<Button onClick={onClick}
variant="contained"
color="primary"
sx={{
    float: { xs: 'none', md: 'right' },  // Agrega float a la derecha en pantallas medianas y grandes, elimina en pantallas pequeñas
    marginBottom : '15px',
    fontSize: '1.0em',
    minWidth: '40px',
    height: '40px',
}}
>
+ Agregar
</Button>
)
}

export default BotonAgregar;