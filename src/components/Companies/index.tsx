import React, { useContext, useEffect, useState } from 'react'
import { companies } from '../../data/data'
import { Action, ActionType, State, store } from '../../store'
import { Company } from '../../types'
import Grid from '../Grid'
import GridRow from '../Grid/GridRow'

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

  const { searchQuery, selectedCategories } = state

  useEffect(() => {
    dispatch({
      type: ActionType.SET_COMPANIES,
      payload: companies as Company[],
    })
  }, [])

  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([])

  useEffect(() => {
    const filteredBySearchQuery = searchQuery
      ? companies.filter(({ name }: Company) =>
          name.toLowerCase().includes((searchQuery || '').toLowerCase())
        )
      : companies

    const filteredByCategories =
      (selectedCategories || []).length > 0
        ? filteredBySearchQuery.filter(({ categories }: Company) =>
            (categories || []).some((category) =>
              (selectedCategories || []).includes(category)
            )
          )
        : filteredBySearchQuery

    setFilteredCompanies(filteredByCategories)
  }, [searchQuery, selectedCategories])

  return (
    <Grid
      {...{
        headers,
        rows: filteredCompanies,
        columns,
        searchQuery: searchQuery || '',
        selectedCategories: selectedCategories || [],
      }}
      isEmpty={filteredCompanies.length === 0}
      rowRenderer={(
        row: Company,
        columns: string,
        searchQuery: string,
        selectedCategories: string[]
      ) => {
        return (
          <GridRow
            key={`${row.name}-${row.id}`}
            {...{ row, columns, searchQuery, selectedCategories }}
          />
        )
      }}
    />
  )
}

export default Companies
