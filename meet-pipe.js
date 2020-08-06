const fs = require('fs')
const { stdout } = require('process')
const file = process.argv[2]
const stream = fs.createReadStream(file)
stream.pipe(stdout)