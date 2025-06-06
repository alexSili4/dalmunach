import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': '/src',
      '@AnimatedComponents': '/src/components/Animated',
      '@GeneralComponents': '/src/components/General',
      '@MainPageComponents': '/src/components/MainPage',
      '@WarningPageComponents': '/src/components/WarningPage',
    },
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'dist/[name]-[hash].js',
        entryFileNames: 'dist/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.name || '';

          if (
            fileName.endsWith('.png') ||
            fileName.endsWith('.jpg') ||
            fileName.endsWith('.webp')
          ) {
            return 'img/app/[name]-[hash][extname]';
          }

          return 'dist/[name]-[hash][extname]';
        },
      },
    },
  },
});
