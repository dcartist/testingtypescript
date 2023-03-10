console.log("test")
// console.log("more test")
require('dotenv').config()
import fastify from 'fastify'
console.log(process.env.PS)
const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})
server.get('/', async (request, reply) => {
  return 'test'
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})