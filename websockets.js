const WebSocket = require('ws')
const ws = new WebSocket('ws://localhost:8099')
const stream = WebSocket.createWebSocketStream(ws)
// stream.setEncoding('utf-8')
stream.write('hello\n')
// stream.push('hello\n')
stream.pipe(process.stdout)
stream.end()
// stream.on('data', chunk => {
//     stream.push(chunk)
// })
// stream.on('end', () => {
    
//     stream.pipe(process.stdout)
// })