import reactRefresh from '@vitejs/plugin-react-refresh'
import antdViteImportPlugin from 'antd-vite-import-plugin'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), antdViteImportPlugin()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
})
