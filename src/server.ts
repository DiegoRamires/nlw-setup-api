import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

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
