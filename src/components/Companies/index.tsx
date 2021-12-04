import React, { useContext, useEffect, useState } from 'react'
import { getCompanies } from '../../api'
import { Action, ActionType, State, store } from '../../store'
import { Company } from '../../types'
import Grid from '../Grid'
import GridRow from '../GridRow'

const headers = [
  {
    property: 'name',
    label: 'Company',
    width: 'minmax(250px, 1fr)',
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
    width: '2fr',
  },
]

const columns = headers.map(({ width }: { width: string }) => width).join(' ')

const Companies = (): JSX.Element => {
  const { dispatch, state } = useContext(store) as {
    dispatch: (action: Action) => void
    state: State
  }
  const { searchQuery = '', selectedCategories = [], companies = [] } = state
  const [isInitialized, setInitialized] = useState<boolean>(false)
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([])

  useEffect(() => {
    if (!isInitialized) {
      const initData = async () => {
        const data = await getCompanies()
        // todo handle dispatch error
        dispatch({
          type: ActionType.INIT_COMPANIES,
          payload: data.companies,
        })
      }
      initData()
    }
    setInitialized(true)
  }, [isInitialized])

  useEffect(() => {
    // const t0 = performance.now()
    const filteredBySearchQuery = searchQuery
      ? companies.filter(({ name }: Company) =>
          name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : companies
    // const t1 = performance.now()
    const filteredByCategories =
      selectedCategories.length > 0
        ? filteredBySearchQuery.filter(
            ({ categories = [] }: Company) =>
              categories.length > 0 &&
              // todo: not sure which is more favorable `every` vs `some` based filtering
              selectedCategories.every((category) =>
                categories.includes(category)
              )
          )
        : filteredBySearchQuery
    // const t2 = performance.now()
    // console.log(`Searching took ${t1 - t0} milliseconds.`)
    // console.log(`Filtering took ${t2 - t1} milliseconds.`)
    setFilteredCompanies(filteredByCategories)
  }, [searchQuery, selectedCategories, companies])

  return (
    <Grid
      {...{
        headers,
        rows: filteredCompanies,
        columns,
        searchQuery: searchQuery,
        selectedCategories: selectedCategories,
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

//   useEffect(() => {
//     const newFiltered = query
//       ? filtered.filter(({ name }: Company) =>
//           name.toLowerCase().includes(query.toLowerCase())
//         )
//       : filteredCategories.length > 0
//       ? filtered
//       : stateCompanies
//     setFiltered(newFiltered)
//   }, [searchQuery])

//   useEffect(() => {
//     const newFiltered =
//       filteredCategories.length > 0
//         ? filtered.filter(({ categories }: Company) =>
//             categories.some((category) =>
//               filteredCategories.includes(category)
//             )
//           )
//         : query
//         ? filtered
//         : stateCompanies
//     setFiltered(newFiltered)
//   }, [filteredCategories])
