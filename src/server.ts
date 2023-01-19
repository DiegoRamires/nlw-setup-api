import Fastify from 'fastify'
import cors from '@fastify/cors'
import { prisma } from './lib/prisma'

const app = Fastify()

app.register(cors)

app.get('/', async () => {
  const habits = await prisma.habit.findMany()

  return habits
})

const port = 3333

app.listen({
  port,
}).then(() => {
  console.log(`HTTP Server running on port ${port}`)
})
