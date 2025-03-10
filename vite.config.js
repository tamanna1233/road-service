import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteCompression from 'vite-plugin-compression'
// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react(),
    tailwindcss(),
    viteCompression({ algorithm: 'brotliCompress', threshold: 10240 })
  ],

  build:{
    minify: 'esbuild', // Use esbuild for faster minification
    target: 'esnext', 
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Creates a separate chunk for third-party libraries
          }
        },
      },
    },
  }
})

