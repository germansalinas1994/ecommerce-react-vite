import TableSearch from "../../components/Categoria/TableSearch";
import {
    Typography, Button, TextField, Box, Modal
} from "@mui/material";
import { Link } from 'react-router-dom';
import BotonAgregar from "../../components/Botones/Agregar";
import axios from "axios";
import Swal from 'sweetalert2'
import LoadingModal from "../../components/LoadingModal";

import { useState, useEffect } from "react";


const ListadoCategoria = () => {
    const apiLocalKey = import.meta.env.VITE_APP_API_KEY

    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({ nombre: '', descripcion: '' });
    const [errorNombre, setErrorNombre] = useState(false);
    const [errorDescripcion, setErrorDescripcion] = useState(false);
    const [categorias, setCategorias] = useState([]);
    const [reload, setReload] = useState(false);
    const { showLoadingModal, hideLoadingModal } = LoadingModal();

    useEffect(() => {
        // Lógica para obtener las categorías
        const fetchCategorias = async () => {
            showLoadingModal();  // <-- Mostrar el modal antes de comenzar la operación asincrónica

            try {
                const response = await axios.get(apiLocalKey + '/categorias');
                setCategorias(response.data.result.data)
                hideLoadingModal();  // <-- Ocultar el modal cuando la operación ha concluido

            } catch (error) {
                hideLoadingModal();  // <-- Ocultar el modal cuando la operación ha concluido

                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    allowOutsideClick: false,
                    title: 'Hubo un error al obtener las categorías',
                    showConfirmButton: true,
                })

            }
        };

        fetchCategorias();
    }, [reload]);


    //funcion que toma el evento de abrir el modal
    const handleOpenModal = () => {
        setOpenModal(true);
    }

    //funcion que toma el evento de cerrar el modal
    const handleCloseModal = () => {
        setFormData({ nombre: '', descripcion: '' });
        setErrorDescripcion(false);
        setErrorNombre(false);
        setOpenModal(false);
    }

    //funcion que toma el evento de cambio de valor en los campos del modal
    const handleChange = (event) => {
        //aca hago un clave valor, para que el nombre del campo sea la clave y el valor sea el valor
        const { name, value } = event.target;
        //aca hago un spread operator para que no se pise el valor anterior
        //el ...prevState es para que no se pise el valor anterior
        //el [name] es para que el nombre del campo sea la clave y el valor sea el valor
        setFormData(prevState => ({ ...prevState, [name]: value }));

        if (name === 'nombre') {
            //el trim es para que no se pueda ingresar solo espacios
            setErrorNombre(!value.trim());
        } else if (name === 'descripcion') {
            setErrorDescripcion(!value.trim());
        }
    }

    const validaFormulario = () => {
        let valida = true;
        //si el campo esta vacio, seteo el error en true
        if (!formData.nombre.trim()) {
            setErrorNombre(true);
            valida = false;
        }
        //si el campo esta vacio, seteo el error en true
        if (!formData.descripcion.trim()) {
            setErrorDescripcion(true);
            valida = false;
        }
        return valida;
    }


    const handleSubmit = async () => {
        debugger;

        if (validaFormulario()) {
            // Función para cargar categoría

            try {

                handleCloseModal();
                showLoadingModal();  // <-- Mostrar el modal antes de comenzar la operación asincrónica

                const resp = await axios.post(apiLocalKey + '/categorias', formData);
                console.log(resp.data);  // Puedes ver la respuesta del servidor
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    allowOutsideClick: false,
                    title: 'Categoría creada correctamente',
                    showConfirmButton: true,

                }).then((result) => {
                    if (result.isConfirmed) {
                        //aca deberia recargar el componente para que se vea la nueva categoria
                        //Revierte el valor de reload para que se vuelva a ejecutar el useEffect
                        //Cada vez que se cambia el valor de reload, se ejecuta el useEffect
                        hideLoadingModal();  // <-- Ocultar el modal cuando la operación ha concluido
                        setReload(prev => !prev);

                    }
                })


                // Aquí puedes manejar la respuesta, por ejemplo, cerrar el modal, mostrar un mensaje de éxito, etc.
            } catch (error) {

                hideLoadingModal();  // <-- Ocultar el modal cuando la operación ha concluido
                console.error("Hubo un error al guardar los datos:", error);
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    allowOutsideClick: false,
                    title: 'Hubo un error al guardar los datos',
                    showConfirmButton: true,

                })

                // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje al usuario.
            }
        }








    }

    return (
        <>
            <Box>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        marginBottom: { xs: '10px', md: '0' },
                    }}
                >
                    Listado de Categorias
                </Typography>
                <BotonAgregar onClick={handleOpenModal}></BotonAgregar>
                <Modal
                    open={openModal}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    onClose={handleCloseModal}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: { xs: '90%', sm: '75%', md: '600px' }, // Cambia esta línea
                            bgcolor: 'background.paper',
                            borderRadius: '10px',
                            boxShadow: 24,
                            p: { xs: 2, sm: 3, md: 4 }, // Cambia el padding también
                        }}
                    >
                        <Typography id="modal-title" variant="h6" component="h2">
                            Cargar Categoría
                        </Typography>
                        <Box mt={2} component="form">
                            <Box>
                                <TextField
                                    sx={{
                                        mb: 2, width: { xs: '90%', sm: '75%', md: '500px' }, // Cambia esta línea
                                    }}

                                    label="Nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    error={errorNombre}
                                    helperText={errorNombre && "El nombre es obligatorio."}
                                />
                                <TextField

                                    sx={{
                                        mb: 2, width: { xs: '90%', sm: '75%', md: '500px' }, // Cambia esta línea
                                    }}

                                    label="Descripción"
                                    name="descripcion"
                                    value={formData.descripcion}
                                    onChange={handleChange}
                                    error={errorDescripcion}
                                    helperText={errorDescripcion && "La descripción es obligatoria."}
                                    margin="normal"
                                />
                            </Box>
                            <Box sx={{ textAlign: 'center' }}>

                                <Button sx={{ mt: 1, mr: 2, width: '120px' }} size="large" variant="contained" color="secondary" onClick={handleCloseModal}>
                                    Cancelar
                                </Button>
                                <Button size="large" sx={{ mt: 1, width: '120px' }} variant="contained" color="primary" onClick={handleSubmit}>
                                    Cargar
                                </Button>

                            </Box>


                        </Box>
                    </Box>
                </Modal>
            </Box>
            

            <TableSearch categorias={categorias} />
        </>
    );
}

export default ListadoCategoria;