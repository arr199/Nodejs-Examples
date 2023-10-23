const os = require('node:os')

function stats () {
  return (
    console.log('\nos : ', os.platform()),
    console.log('os version: ', os.version()),
    console.log('free memory : ', os.freemem() / 1024 / 1024 + 'mb\n')
  )
}

module.exports = {
  stats
}
