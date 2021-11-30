import { Company } from '../../store'
import { companies as raw } from './companies'

export const categories = [
  'plumbing',
  'electrical',
  'flooring',
  'excavation',
  'plastering',
  'painting',
  'heating',
  'steelwork',
  'roofwork',
]

export const companies = (raw as [Company]).map((raw) => ({
  ...raw,
  categories: categories.filter(() => Math.random() > 0.7),
}))
