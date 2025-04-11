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

test:{
  environment: 'jsdom',
  globals: true,
  setupFiles: './src/setupTests.js', 
},

  build:{
    minify: 'esbuild', // Use esbuild for faster minification
    target: 'esnext', 
    rollupOptions: {
      treeshake:true,
      output: {
        manualChunks: {
            react: ['react', 'react-dom'],
            router: ['react-router-dom'],
          },
      },
    },
  }
})

