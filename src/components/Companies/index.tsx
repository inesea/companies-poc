import { DataGrid, GridColumns } from '@mui/x-data-grid'
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Action, ActionType, Company, State, store } from '../../store'
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
    renderCell: (rowData: { value: string }) =>
      rowData.value && (
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

const Container = styled.div`
  height: calc(100vh - 100px);
  width: calc(100vw - 100px);
`

const Companies = (): JSX.Element => {
  const { dispatch, state } = useContext(store) as {
    dispatch: (action: Action) => void
    state: State
  }

  console.log('companies', state.companies)

  useEffect(() => {
    dispatch({
      type: ActionType.SET_COMPANIES,
      payload: companies as [Company],
    })
  }, [])

  return (
    <Container>
      <DataGrid
        rows={companies}
        columns={columns as GridColumns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Container>
  )
}

export default Companies
