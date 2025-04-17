import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Minifica el código JS
    minify: 'esbuild',
    // Divide el código en fragmentos
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['bootstrap', 'react-bootstrap'],
        },
      },
    },
    // Genera source maps para producción
    sourcemap: true,
    // Comprimir con Brotli para mejorar rendimiento
    reportCompressedSize: true,
    // Optimiza tamaño de chunks
    chunkSizeWarningLimit: 800,
  },
  // Optimizaciones de dependencias
  optimizeDeps: {
    include: ['react', 'react-dom', 'bootstrap'],
  },
  // Servidor de desarrollo para las pruebas
  server: {
    port: 3000,
    host: true,
    open: true,
  },
});