import { Company } from './types'
const serverUrl = window.location.href

console.log({ serverUrl }) // eslint-disable-line no-console

interface CompaniesResponse {
  errorMessage: string | null
  companies: Company[]
}

interface CategoriesResponse {
  errorMessage: string | null
  categories: string[]
}

export const getCompanies = async (): Promise<CompaniesResponse> => {
  let data
  try {
    const response = await fetch(`${serverUrl}api/companies`)
    data = {
      ...(await response.json()),
      errorMessage: null,
    }
  } catch (e: unknown) {
    data = { errorMessage: 'Failed to fetch companies', companies: [] }
  }
  return data as CompaniesResponse
}

export const getCategories = async (): Promise<CategoriesResponse> => {
  let data
  try {
    const response = await fetch(`${serverUrl}api/categories`)
    data = {
      ...(await response.json()),
      errorMessage: null,
    }
  } catch (e: unknown) {
    data = { errorMessage: 'Failed to fetch categories', categories: [] }
  }
  return data as CategoriesResponse
}
