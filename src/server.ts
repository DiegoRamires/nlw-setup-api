import Fastify from 'fastify'

const app = Fastify()

app.get('/', () => {
  return 'Hello'
})

const port = 3333

app.listen({
  port,
}).then(() => {
  console.log(`HTTP Server running on port ${port}`)
})
