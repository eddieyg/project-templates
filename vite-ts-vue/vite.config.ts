import { resolve } from 'node:path'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import removeConsole from 'vite-plugin-remove-console'
import type { MkcertPluginOptions } from 'vite-plugin-mkcert'
import mkcert from 'vite-plugin-mkcert'
import eslint from 'vite-plugin-eslint'
// import autoprefixer from 'autoprefixer'

// https://cn.vitejs.dev/guide/
export default defineConfig((configEnv) => {
  const { mode, command } = configEnv
  const env = loadEnv(mode, process.cwd())
  const isProd = command === 'build'

  const mkcertOptions: MkcertPluginOptions = {}
  if (env.VITE_MKCERT_PATH)
    mkcertOptions.mkcertPath = env.VITE_MKCERT_PATH
  else
    mkcertOptions.source = 'coding'

  return {
    base: '/',
    define: {
      VG_BUILD_TIME: +new Date(),
    },
    resolve: {
      alias: {
        '@': resolve('./src'),
        '@comps': resolve('./src/components'),
        '@assets': resolve('./src/assets'),
        '@style': resolve('./src/style'),
        '@util': resolve('./src/util'),
      },
    },
    optimizeDeps: {},
    plugins: [
      vue(),
      mkcert(mkcertOptions),
      eslint({ emitWarning: false }),
      createHtmlPlugin({
        minify: true,
        entry: '/src/main.ts',
        template: 'index.html',
        inject: {
          data: {
            title: env.VITE_APP_TITLE,
          },
        },
      }),
      removeConsole(),
    ],
    css: {
      postcss: {
        // plugins: isProd ? [autoprefixer] : [],
      },
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/style/variable.scss";',
        },
      },
    },
    server: {
      port: 9999,
      proxy: {
        '^/serve-api/.*': {
          target: env.VITE_SERVE_API_HOST,
          rewrite: path => path.replace(/^\/serve-api/, ''),
          changeOrigin: true,
          secure: false,
          // agent: new ProxyAgent(env.VITE_PROXY_AGENT),
        },
      },
    },
    build: {
      sourcemap: mode === 'test',
      rollupOptions: {},
    },
  }
})
