import { setupSocketServer } from "@rahoot/socket/setup"
import { createServer } from "http"

const port = 3001
const httpServer = createServer()
setupSocketServer(httpServer)

console.log(`Socket server running on port ${port}`)
httpServer.listen(port)
