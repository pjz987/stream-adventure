const fs = require('fs')
const { Readable } = require('stream')
const { stdout } = require('process')
const input = process.argv[2]
// console.log(Readable)
const stream = new Readable({})
// console.log(stream)
stream._read = () => {}

stream.push(input)
stream.pipe(stdout) 
// stream.resume()
// stream.setEncoding('utf-8')
// // stream.pipe()
// console.log(stream.push)
// stream.on('data', (chunk) => {
//     stream.read()
//     stream.push(chunk)
//     x = z
// })
// stream.on('end', () => {
//     stream.pipe(process.stdout)
//     d = s
// })
