
import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    reactRefresh(),
  ],
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
});





// import * as reactPlugin from 'vite-plugin-react'
// import type { UserConfig } from 'vite'

// const config: UserConfig = {
//   jsx: 'react',
//   plugins: [reactPlugin]
// }

// export default config;
