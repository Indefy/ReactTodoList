import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   "extends": ["eslint:all", "plugin:react/all"]
// })

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react()], 
    base: '', 
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),  
        '@components': path.resolve(__dirname, './src/components'),
        '@styles': path.resolve(__dirname, './styles')
      },
    },
    css: {
      preprocessorOptions: {
        sass: {
          includePaths: ['node_modules'],
          additionalData: `@import '@./colors-var'`, 
        },
      },
    },
    build: {
      outDir: '../../build', 
      minify: 'terser',
      target: 'esnext', 
    },
    extends: ["eslint:all", "plugin:react/all"], // Include ESLint rules 
  };
});