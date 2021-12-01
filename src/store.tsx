import React, { createContext, ReactNode, useReducer } from 'react'
import { Company } from './types'
export interface State {
  companies?: Company[]
}

export enum ActionType {
  SET_COMPANIES,
  SET_SEARCH_QUERY,
}

export type Action =
  | { type: ActionType.SET_COMPANIES; payload: Company[] }
  | { type: ActionType.SET_SEARCH_QUERY; payload: string }

const initialState = {}
const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer<(state: State, action: Action) => State>(
    (state: State, action: Action): State => {
      switch (action.type) {
        case ActionType.SET_COMPANIES: {
          return {
            ...state,
            companies: action.payload,
          }
        }
        default: {
          return state
        }
      }
    },
    initialState
  )

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
