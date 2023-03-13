import { resolve } from 'node:path'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import removeConsole from 'vite-plugin-remove-console'
// import mkcert from 'vite-plugin-mkcert'
import eslint from 'vite-plugin-eslint'
import autoprefixer from 'autoprefixer'
import ProxyAgent from 'proxy-agent'

// https://vitejs.cn/vite3-cn/config/
export default defineConfig((configEnv) => {
  const { mode, command } = configEnv
  const env = loadEnv(mode, process.cwd())
  const isProd = command === 'build'

  return {
    base: '/',
    define: {
      VG_BUILD_TIME: +new Date(),
    },
    resolve: {
      alias: {
        '@': resolve('./src'),
        '@comps': resolve('./src/components'),
        '@image': resolve('./src/assets/image'),
        '@style': resolve('./src/assets/style'),
        '@util': resolve('./src/util'),
      },
    },
    optimizeDeps: {},
    plugins: [
      vue(),
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
      // mkcert({ source: 'coding' }),
      eslint(),
    ],
    css: {
      postcss: {
        plugins: isProd ? [autoprefixer] : [],
      },
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/variable.scss";',
        },
      },
    },
    server: {
      // https: true,
      port: 9999,
      proxy: {
        '^/eddapi/.*': {
          target: 'http://api.edd.com',
          rewrite: path => path.replace(/^\/eddapi/, ''),
          changeOrigin: true,
          secure: false,
          agent: new ProxyAgent(env.VITE_PROXY_AGENT),
        },
      },
    },
    build: {
      sourcemap: mode === 'test',
      rollupOptions: {},
    },
  }
})
