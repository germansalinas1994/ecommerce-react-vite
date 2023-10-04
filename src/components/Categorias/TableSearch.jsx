import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';



export default function TableSearch() {

    // const myData = [
    //     { idCategoria: 1, descripcion: 'Hello', cantidadProductos: 'World' },
    //     { idCategoria: 2, descripcion: 'XGrid', cantidadProductos: 'is Awesome' },
    //     { idCategoria: 3, descripcion: 'Material-UI', cantidadProductos: 'is Amazing' },
    //   ];


    const [categorias, setCategorias] = useState([]);
    const apiLocalKey = import.meta.env.VITE_APP_API_KEY

    useEffect(() => {
        GetCategorias()
    }
        , [])


    const GetCategorias = async () => {
        debugger;
        try {
            const res = await axios.get(apiLocalKey + '/categorias')
            setCategorias(res.data.result.data)
            console.log(res.data.result.data)
        } catch (error) {
            console.log(error)
        }
    }

    const myColumns = [
        { field: 'idCategoria', headerName: 'idCategoria', width: 100 },
        { field: 'descripcion', headerName: 'descripcion', width: 200 },
        { field: 'cantidadProductos', headerName: 'cantidadProductos', width: 150 },

        // Define más columnas según sea necesario
    ];
    return (
        <Box sx={{ height: 400, width: 1 }}>
            <DataGrid
                initialState={{
                    pagination: { paginationModel: { pageSize: 5 } },
                  }}
                pageSizeOptions={[5, 10, 25]}
                rows={categorias}  // Usa tus propios datos aquí
                columns={myColumns}  // Usa tus propias columnas aquí
                getRowId={(row) => row.idCategoria}
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                components={{ Toolbar: GridToolbar }}
                componentsProps={{
                    toolbar: {
                        showQuickFilter: true,
                    },
                }}
            />
        </Box>
    );
}
