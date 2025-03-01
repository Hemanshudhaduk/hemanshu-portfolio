import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/hemanshu-portfolio/',  // Change this to match your repo name
});
