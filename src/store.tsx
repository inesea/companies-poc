import React, { createContext, ReactNode, useReducer } from 'react'
import { Company } from './types'
export interface State {
  companies?: Company[]
  searchQuery?: string
  selectedCategories?: string[]
}

export enum ActionType {
  SET_COMPANIES,
  SET_SEARCH_QUERY,
  ADD_CATEGORY_FILTER,
  REMOVE_CATEGORY_FILTER,
  SELECT_ALL_CATEGORIES,
  CLEAR_ALL_CATEGORIES,
}

export type Action =
  | { type: ActionType.SET_COMPANIES; payload: Company[] }
  | { type: ActionType.SET_SEARCH_QUERY; payload: string }
  | { type: ActionType.ADD_CATEGORY_FILTER; payload: string }
  | { type: ActionType.REMOVE_CATEGORY_FILTER; payload: string }
  | { type: ActionType.SELECT_ALL_CATEGORIES; payload: string[] }
  | { type: ActionType.CLEAR_ALL_CATEGORIES }

const initialState = {} // todo: how to set initial state with companies: [] etc

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
        case ActionType.SET_SEARCH_QUERY: {
          return {
            ...state,
            searchQuery: action.payload,
          }
        }
        case ActionType.ADD_CATEGORY_FILTER: {
          return {
            ...state,
            selectedCategories: [
              ...(state.selectedCategories || []),
              action.payload,
            ],
          }
        }
        case ActionType.REMOVE_CATEGORY_FILTER: {
          return {
            ...state,
            selectedCategories: (state.selectedCategories || []).filter(
              (category) => category !== action.payload
            ),
          }
        }
        case ActionType.SELECT_ALL_CATEGORIES: {
          return {
            ...state,
            selectedCategories: action.payload,
          }
        }
        case ActionType.CLEAR_ALL_CATEGORIES: {
          return {
            ...state,
            selectedCategories: [],
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
