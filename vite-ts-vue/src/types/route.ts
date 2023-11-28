import type { RouteRecordRaw } from 'vue-router'

export namespace IRoute {

  export interface RecordRawMeta {
    title?: string
  }

  export type RecordRaw = RouteRecordRaw & { meta: RecordRawMeta }
}
