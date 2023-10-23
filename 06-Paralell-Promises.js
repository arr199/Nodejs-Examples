const { readFile } = require('node:fs/promises')
const { cachedDataVersionTag } = require('node:v8')

Promise.all([
  readFile('./file.txt', 'utf-8'),
  readFile('./file2.txt', 'utf-8')
])
  .then(([a, b]) => {
    globalThis.console.log('First File :' + a)
    globalThis.console.log('Second File :' + b)
  })
