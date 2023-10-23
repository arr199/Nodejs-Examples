const fs = require('node:fs')

console.log('\n1-Reading first file')
fs.readFile('./file2.txt', 'utf-8', (error, data) => {
  if (error) {
    console.err(error)
    return
  }
  console.log('2-first file: ' + data + '\n')
})

console.log('3-Reading second file')
fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if (err) {
    console.err(err)
    return
  }
  console.log('4-second file :' + data)
})
