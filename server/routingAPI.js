const http = require('node:http')
const json = require('./info')

const SERVER_PORT = 1234

const webServer = http.createServer((req, resp) => {
  const { method, url } = req

  switch (method) {
    case 'GET' :
      switch (url) {
        case '/':
          resp.setHeader('Content-Type', 'text/html; charset=utf-8')
          return resp.end('<h1>My web server is live</h1>')
        case '/users':
          resp.setHeader('Content-Type', 'application/json')
          return resp.end(JSON.stringify(json))
        default :
          resp.statusCode = 404
          resp.setHeader('Content-Type', 'text/html; charset=utf-8')
          return resp.end('<h1>Error 404<h1>')
      }

    case 'POST' :
      switch (url) {
        case '/users' : {
          let body = ''
          req.on('data', (chunk) => {
            console.log(chunk)
            console.log(chunk.toString())
            body += chunk.toString()
          })
          req.on('end', () => {
            const data = JSON.parse(body)
            resp.statusCode = 201

            resp.setHeader('Content-Type', 'application/json; charset=utf-8')
            data.timestamp = Date.now()
            resp.end(JSON.stringify(data))
          })
          break
        }
        default :
          resp.statusCode = 404
          resp.setHeader('Content-Type', 'application/json; charset=utf-8')
          return resp.end('Error 404')
      }
  }
})

webServer.listen(SERVER_PORT, () => {
  console.log(`listening on http://localhost:${SERVER_PORT}`)
})
