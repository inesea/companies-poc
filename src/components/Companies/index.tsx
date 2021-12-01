import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Action, ActionType, State, store } from '../../store'
import { Company } from '../../types'
import Grid from '../Grid'
import GridRow from '../Grid/GridRow'
import { companies } from './data'

const headers = [
  {
    property: 'name',
    label: 'Company',
    width: '150px',
  },
  {
    property: 'city',
    label: 'City',
    width: '150px',
  },
  {
    property: 'logo',
    label: 'Logo',
    width: '50px',
  },
  {
    property: 'categories',
    label: 'Specialities',
    width: '1fr',
  },
]

const columns = headers.map(({ width }: { width: string }) => width).join(' ')

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const Companies = (): JSX.Element => {
  const { dispatch, state } = useContext(store) as {
    dispatch: (action: Action) => void
    state: State
  }

  console.log('companies', { companies: state.companies })

  useEffect(() => {
    dispatch({
      type: ActionType.SET_COMPANIES,
      payload: companies as Company[],
    })
  }, [])

  return (
    <Container>
      <Grid
        {...{ headers, rows: companies.slice(0, 100), columns }}
        isEmpty={companies.length === 0}
        rowRenderer={(row: Company, columns: string) => {
          return <GridRow key={row.name} {...{ row, columns }} />
        }}
      />
    </Container>
  )
}

export default Companies
