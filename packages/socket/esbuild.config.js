import esbuild from "esbuild"
import path from "path"

const sharedConfig = {
  bundle: true,
  minify: true,
  platform: "node",
  sourcemap: true,
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  alias: {
    "@": path.resolve("./src"),
  },
}

export const config = {
  ...sharedConfig,
  entryPoints: ["src/index.ts"],
  outfile: "dist/index.cjs",
}

export const setupConfig = {
  ...sharedConfig,
  entryPoints: ["src/setup.ts"],
  outfile: "dist/setup.cjs",
  format: "cjs",
}

await esbuild.build(config)
await esbuild.build(setupConfig)
