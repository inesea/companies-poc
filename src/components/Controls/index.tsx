import React, { FormEvent, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Action, ActionType, store } from '../../store'

const StyledControls = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  gap: 12px;
`

export const Input = styled.input`
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  border: 1px solid lightgray;
  border-radius: 4px;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
`

const Controls = (): JSX.Element => {
  const { dispatch } = useContext(store) as {
    dispatch: (action: Action) => void
  }

  const [query, setQuery] = useState<string>('')

  const handleOnChange = (event: FormEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch({ type: ActionType.SET_SEARCH_QUERY, payload: query })
    }, 100)
    return () => clearTimeout(timeoutId)
  }, [query])

  return (
    <StyledControls>
      <Input
        type="text"
        value={query}
        onChange={handleOnChange}
        placeholder="Search for a company..."
      />
      {query && (
        <button
          onClick={() => {
            dispatch({ type: ActionType.SET_SEARCH_QUERY, payload: '' })
            setQuery('')
          }}
        >
          x
        </button>
      )}
    </StyledControls>
  )
}

export default Controls
