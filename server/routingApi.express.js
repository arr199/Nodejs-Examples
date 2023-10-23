const info = require('./info')
const express = require('express')

const app = express()
const PORT = 1236

// GET REQUEST
app.disable('x-powered-by')

app.use(express.json())
// app.use((req, resp, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()
//   let body = ''
//   req.on('data', (chunk) => {
//     body += chunk.toString()
//   })
//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     req.body = data
//     next()
//   })
// })

app.get('/', (req, resp) => {
  resp.send('<h1>Welcome to the Api<h1>')
})

app.get('/users', (req, resp) => {
  resp.json(info)
})

// POST REQUEST
app.post('/users', (req, resp) => {
  resp.status(201).json(req.body)
})
app.use((req, resp) => {
  resp.status(404).send('<h1>404<h1><p>Not found</p>')
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
