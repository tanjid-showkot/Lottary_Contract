import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Lottary_Contract/',

  plugins: [nodePolyfills(), react()],
})
