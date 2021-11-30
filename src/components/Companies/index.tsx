import { DataGrid, GridColumns } from '@mui/x-data-grid'
import React from 'react'
import { companies } from './data'

const columns = [
  {
    field: 'name',
    headerName: 'Company',
    width: 300,
    editable: false,
  },
  {
    field: 'city',
    headerName: 'City',
    width: 150,
    editable: false,
  },
  {
    field: 'logo',
    headerName: 'Logo',
    type: 'image',
    width: 110,
    editable: false,
    sortable: false,
    renderCell: (rowData: { value: string }) => (
      <img
        src={rowData.value}
        alt="logo"
        style={{ width: '20px', height: '20px' }}
      />
    ),
  },
  {
    field: 'categories',
    headerName: 'Specialities',
    sortable: false,
    width: 160,
    renderCell: (rowData: { value: [string] }) => (
      <div>{rowData.value.join(', ')}</div>
    ),
  },
]

const Companies = (): JSX.Element => {
  console.log({ companies })
  return (
    <div>
      <DataGrid
        rows={companies}
        columns={columns as GridColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default Companies
