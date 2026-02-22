import { setupSocketServer } from "@rahoot/socket/setup"
import { createServer } from "http"
import next from "next"

const dev = process.env.NODE_ENV !== "production"
const hostname = "0.0.0.0"
const port = parseInt(process.env.PORT || "3000", 10)

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const httpServer = createServer(handle)

  setupSocketServer(httpServer)

  httpServer.listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
