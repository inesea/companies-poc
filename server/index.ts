import cors from 'cors'
import express, { Application } from 'express'
import categories from './data/categories'
import companies from './data/companies'

const PORT = process.env.PORT || 8000

const app: Application = express()

app.use(cors())

app.get('/api/companies', async (_req, res) => {
  res.send({
    companies,
  })
})

app.get('/api/categories', async (_req, res) => {
  res.send({
    categories,
  })
})

app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})
