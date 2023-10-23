const fs = require('node:fs/promises')

// if the /promises doesnt exist we can use promisify
// SECUENCIAL ASYNC
async function init () {
  const file1 = await fs.readFile('./file2.txt', 'utf-8')
  console.log('first file : ' + file1)

  const file2 = await fs.readFile('./file.txt', 'utf-8')
  console.log('second file : ' + file2)
}
init();

(
  async () => {
    const file1 = await fs.readFile('./file2.txt', 'utf-8')
    console.log('first file : ' + file1)

    const file2 = await fs.readFile('./file.txt', 'utf-8')
    console.log('second file : ' + file2)
  })()
