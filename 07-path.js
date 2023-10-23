const { readdir } = require('node:fs/promises')
const path = require('node:path')

console.log(path.sep)
console.log(path.basename(''))
console.log(path.extname('./03-ReadFile.js\n'))

// auto invoke function ( need the ; )
;(
  async () => {
    const data = await readdir('.')

    data.forEach(element => {
      console.log(element)
    })
  })()

// auto invoke function
async function init () {
  const data = await readdir('./')
  console.log(data)
}init()

readdir('.')
  .then(data => {
    data.forEach(e => console.log(e))
  })
  .catch(err => {
    if (err) {
      console.log('can not read the file', err)
    }
  })

console.log('hello')
