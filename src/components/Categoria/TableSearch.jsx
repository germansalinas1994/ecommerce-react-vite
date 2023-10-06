import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { GridActionsCellItem } from '@mui/x-data-grid';

const TableSearch = ({ categorias }) => {
  const myColumns = [
    { field: 'nombre', headerName: 'Nombre Categoría', width: 500 },
    { field: 'descripcion', headerName: 'Descripción', width: 500 },
    { field: 'cantidadProductos', headerName: 'Cantidad Productos', width: 500 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Acciones',
      width: 200,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            color="inherit"
          />,
        ];
      },
    },
  ];

  if (categorias.length > 0) {
    return (
      <Box sx={{ height: 1, width: 1, overflow: 'auto' }}>
        <DataGrid
          sx={{ width: '100%', height: '100%' }}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          pageSizeOptions={[10, 20, 30]}
          rows={categorias}
          columns={myColumns}
          getRowId={(row) => row.idCategoria}
          disableDensitySelector
          disableColumnSelector
          disableColumnFilter
          components={{ Toolbar: GridToolbar }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          localeText={{
            noRowsLabel: 'No hay filas',
            footerPaginationRowsPerPage: 'Filas por página:',
            footerPaginationPage: 'Página:',
            footerTotalRows: 'Total de filas:',
            selectionFooter: (count) => `${count} filas seleccionadas`,
          }}
        />
      </Box>
    );
  } 
}

export default TableSearch;
