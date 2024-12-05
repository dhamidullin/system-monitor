import express from 'express'
import path from 'path'
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'
import { getValues } from './system'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)
const PORT = 8371

app.use(express.static(path.join(__dirname, '../public')))

const sockets = new Set<Socket>()

io.on('connection', (socket) => {
  sockets.add(socket)

  socket.on('disconnect', () => {
    sockets.delete(socket)
  })
})

httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)

  startBroadcasting()
})

const startBroadcasting = () => {
  setInterval(async () => {
    if (io.engine.clientsCount) {
      const stats = await getValues()

      io.emit('stats', JSON.stringify({
        stats,
        clientsCount: io.engine.clientsCount
      }))
    }
  }, 1000);
}
