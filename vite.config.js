import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/hemanshu-portfolio/', // 👈 Required for GitHub Pages
  build: {
    outDir: 'dist',
  }
});
