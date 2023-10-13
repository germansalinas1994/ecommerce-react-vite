import { useEffect, useState } from 'react';
import LoadingModal from "../../components/LoadingModal";
import axios from "axios";
// con el useCarrito, puedo tener los datos del carrito en cualquier componente, sin necesidad de pasarlos por props
import { useCarrito } from '../../components/Cart/CarritoProvider'; // importo el hook que me permite acceder al estado global del carrito


const ListadoCarrito = () => {

    const apiLocalKey = import.meta.env.VITE_APP_API_KEY
    const carrito = useCarrito().carrito;  //uso el hook para obtener solo las publicaciones(id) y cantidades del carrito
    const [publicacionesCarrito, setPublicacionesCarrito] = useState([]);
    const { showLoadingModal, hideLoadingModal } = LoadingModal();

    // el use effect se ejecuta cuando el componente se renderiza, o cuando sucede alguna condicion que se le pasa en el array
    useEffect(() => {
        // Lógica para obtener los publicaciones de los productos agregados al carrito
        fetchProductosCarrito(); // llamo a la funcion que obtiene las publicaciones

    }, []);

    const fetchProductosCarrito = async () => {
        showLoadingModal();  // <-- Mostrar el modal antes de comenzar la operación asincrónica

        try {
            debugger;
            const response = await axios.post(apiLocalKey + '/publicacionesCarrito', carrito); // le paso el array de publicaciones del carrito
            hideLoadingModal();  // <-- Ocultar el modal cuando la operación ha concluido

        } catch (error) {
            hideLoadingModal();  // <-- Ocultar el modal cuando la operación ha concluido
            console.log(error);
        }
    };


    return(
        <div>
            <h1>Carrito</h1>
        </div>
    )
}

export default ListadoCarrito;