import express, { Application } from 'express'
import path from 'path'
import categories from './data/categories'
import companies from './data/companies'

const PORT = process.env.PORT || 5000

const app: Application = express()

app.use(express.static(path.join(__dirname, '../../build')))

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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../build/index.html'))
})

app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})
