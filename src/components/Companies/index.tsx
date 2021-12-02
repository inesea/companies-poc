import React, { useContext, useEffect, useState } from 'react'
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

const Companies = (): JSX.Element => {
  const { dispatch, state } = useContext(store) as {
    dispatch: (action: Action) => void
    state: State
  }

  const { searchQuery } = state

  useEffect(() => {
    dispatch({
      type: ActionType.SET_COMPANIES,
      payload: companies as Company[],
    })
  }, [])

  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([])

  useEffect(() => {
    const filtered = searchQuery
      ? companies
          .slice(0, 100)
          .filter(({ name }: Company) =>
            name.toLowerCase().includes(searchQuery.toLowerCase())
          )
      : companies.slice(0, 100)
    setFilteredCompanies(filtered)
  }, [searchQuery])

  return (
    <Grid
      {...{
        headers,
        rows: filteredCompanies,
        columns,
        searchQuery: searchQuery || '',
      }}
      isEmpty={filteredCompanies.length === 0}
      rowRenderer={(row: Company, columns: string, searchQuery: string) => {
        return <GridRow key={row.name} {...{ row, columns, searchQuery }} />
      }}
    />
  )
}

export default Companies
