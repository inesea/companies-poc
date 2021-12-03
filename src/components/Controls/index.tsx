// import debounce from 'lodash/debounce'
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

  const commitDebounced = useCallback(
    throttle((value: string) => dispatchSetSearchQuery(value), 500),
    [dispatch]
  )

  useEffect(() => {
    commitDebounced(query)
  }, [query])

  const handleSearchDismiss = () => {
    dispatch({ type: ActionType.SET_SEARCH_QUERY, payload: '' })
    setQuery('')
  }

  const handleToggleCategory = (key: string, isSelected: boolean) => {
    dispatch({
      type: isSelected
        ? ActionType.ADD_CATEGORY_FILTER
        : ActionType.REMOVE_CATEGORY_FILTER,
      payload: key,
    })
  }

  const handleSelectAllCategories = () => {
    dispatch({
      type: ActionType.SELECT_ALL_CATEGORIES,
      payload: filterOptions.map(({ key }) => key),
    })
  }

  const handleClearAllCategories = () => {
    dispatch({
      type: ActionType.CLEAR_ALL_CATEGORIES,
    })
  }

  return (
    <StyledControls>
      <Flexbox gap="8px">
        <SearchField
          value={query}
          onChange={handleSearchChange}
          onDismiss={handleSearchDismiss}
        />
        <MultiSelect
          options={filterOptions}
          selectedOptions={selectedCategories || []}
          placeholder="Filter by categories..."
          selectOption={handleToggleCategory}
          selectAll={handleSelectAllCategories}
          clearAll={handleClearAllCategories}
        />
      </Flexbox>
    </StyledControls>
  )
}

export default Controls
