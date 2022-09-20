import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: '@emotion/react',
  })],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    }
  },
  esbuild: {
    jsxFactory: "jsx",
    jsxInject: `import { jsx } from "@emotion/react"`
  }
})
