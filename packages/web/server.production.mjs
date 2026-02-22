import { createServer } from "node:http"
import path from "node:path"
import { fileURLToPath } from "node:url"
import next from "next"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const dev = false
const hostname = "0.0.0.0"
const port = parseInt(process.env.PORT || "3000", 10)

process.env.NODE_ENV = "production"

const app = next({ dev, hostname, port, dir: __dirname })

const { setupSocketServer } = await import(
  path.join(__dirname, "..", "socket", "dist", "setup.cjs")
)

await app.prepare()

const handle = app.getRequestHandler()
const httpServer = createServer(handle)

setupSocketServer(httpServer)

httpServer.listen(port, () => {
  console.log(`> Ready on http://${hostname}:${port}`)
})
