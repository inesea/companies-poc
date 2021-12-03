import throttle from 'lodash/throttle'
import React, {
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import styled from 'styled-components'
import { categories } from '../../data/data'
import { Action, ActionType, State, store } from '../../store'
import Flexbox from '../Flexbox'
import MultiSelect from '../MultiSelect'
import SearchField from '../SearchField'

const StyledControls = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 12px;
  width: 100%;
`

const filterOptions = categories.map((category) => ({
  key: category,
  label: category,
}))

const Controls = (): JSX.Element => {
  const { dispatch, state } = useContext(store) as {
    dispatch: (action: Action) => void
    state: State
  }
  const { selectedCategories } = state
  const [query, setQuery] = useState<string>('')

  const handleSearchChange = (event: FormEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value)
  }

  const dispatchSetSearchQuery = (value: string) => {
    dispatch({
      type: ActionType.SET_SEARCH_QUERY,
      payload: value,
    })
  }

  const dispatchSetQueryThrottled = useCallback(
    throttle((value: string) => dispatchSetSearchQuery(value), 500),
    [dispatch]
  )

  useEffect(() => {
    dispatchSetQueryThrottled(query)
  }, [query])

  const handleSearchDismiss = () => {
    dispatch({ type: ActionType.SET_SEARCH_QUERY, payload: '' })
    setQuery('')
  }

  const handleChangeCategories = (categories: string[]) => {
    dispatch({
      type: ActionType.SET_CATEGORY_FILTER,
      payload: categories,
    })
  }

  return (
    <StyledControls>
      <Flexbox gap="8px">
        <SearchField
          value={query}
          onChange={handleSearchChange}
          onDismiss={handleSearchDismiss}
          placeholder="Search by name"
        />
        <MultiSelect
          options={filterOptions}
          selectedOptions={selectedCategories || []}
          onChangeSelection={handleChangeCategories}
          placeholder="Filter by category"
        />
      </Flexbox>
    </StyledControls>
  )
}

export default Controls
