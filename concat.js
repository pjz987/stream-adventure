const through = require('through2')
const concat = require('concat-stream')
// const stream = through(write, end)
const { Readable } = require('stream')
const { stdout } = require('process')

const stream = new Readable({})
stream._read = () => {}


process.stdin
    .pipe(concat((text) => {
        text = text.toString()
        const reverse = text.split('').reduce((rev, char) => char + rev, '')  // credit for this string reversal: https://medium.com/better-programming/5-ways-to-reverse-a-string-in-javascript-466f62845827
        stream.push(reverse)
        stream.pipe(stdout)
    }))