import React, { createContext, ReactNode, useReducer } from 'react'
import { Company } from './types'
export interface State {
  companies?: Company[]
  categories?: string[]
  searchQuery?: string
  selectedCategories?: string[]
}

export enum ActionType {
  INIT_COMPANIES,
  INIT_CATEGORIES,
  SET_SEARCH_QUERY,
  SET_CATEGORY_FILTER,
}

export type Action =
  | { type: ActionType.INIT_COMPANIES; payload: Company[] }
  | { type: ActionType.INIT_CATEGORIES; payload: string[] }
  | { type: ActionType.SET_SEARCH_QUERY; payload: string }
  | { type: ActionType.SET_CATEGORY_FILTER; payload: string[] }

const initialState = {} // todo: how to set initial state with companies: [] etc

const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer<(state: State, action: Action) => State>(
    (state: State, action: Action): State => {
      switch (action.type) {
        case ActionType.INIT_COMPANIES: {
          return {
            ...state,
            companies: action.payload,
          }
        }
        case ActionType.INIT_CATEGORIES: {
          return {
            ...state,
            categories: action.payload,
          }
        }
        case ActionType.SET_SEARCH_QUERY: {
          return {
            ...state,
            searchQuery: action.payload,
          }
        }
        case ActionType.SET_CATEGORY_FILTER: {
          return {
            ...state,
            selectedCategories: action.payload,
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
