const fs = require('node:fs/promises')

// if the /promises doesnt exist we can use promisify
//  const { promisify } =  require("node:util")
//  const readFileP =  promisify(fs.readFile)
//  fs.readFileP("./file2.txt" , "utf-8" )
//     .then(data => {
//         console.log(data)
//     })

fs.readFile('./file.txt', 'utf-8')
  .then(data => console.log(data))
