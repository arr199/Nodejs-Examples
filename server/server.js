const http = require('node:http')
const fs = require('node:fs/promises')

const apiServer = http.createServer((req, resp) => {
  if (req.url === '/') {
    resp.end(JSON.stringify({ user: 'lola', age: 22, isActive: false }))
  }
})

const webServer = http.createServer((req, resp) => {
  const fileToRead = req.url === '/' ? 'index.html' : req.url.slice(1)

  fs.readFile(fileToRead, 'utf-8')
    .then(data => resp.end(data))
    .catch(err => resp.end(`<h1>${err}<h1>`))
})

apiServer.listen(23001, () => {
  console.log('http://localhost:23001')
})

webServer.listen(60797, () => {
  console.log('http://localhost:60797')
})
