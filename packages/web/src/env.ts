import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

const env = createEnv({
  server: {
    WEB_ORIGIN: z.string().default("http://localhost:3000"),
  },

  runtimeEnv: {
    WEB_ORIGIN: process.env.WEB_ORIGIN,
  },
})

export default env
