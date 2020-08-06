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
        const reverse = text.split('').reduce((rev, char) => char + rev, '')
        stream.push(reverse)
        stream.pipe(stdout)
    }))