const through = require('through2')
const split = require('split')
const stream = through(write, end)
let count = 0
function write(buf, _, next) {
    count++
    // console.log(count)
    this.push(count%2 === 0 ? buf.toString().toUpperCase() : buf.toString().toLowerCase())
    next()
}
function end() {
    // done()
}
process.stdin
    .pipe(split())
    .pipe(stream)
    .pipe(process.stdout)