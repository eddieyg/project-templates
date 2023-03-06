/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  /**
   * .env.*
   */
  readonly VITE_APP_TITLE: string
  /**
   * vite.config define
   */
  readonly VITE_D_buildTime: number
}