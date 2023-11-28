import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import type { IApi } from '@/types'

interface HttpClientOptions {
  devBaseURL: string
  baseURL: string
}

export class HttpClient {
  public readonly client: AxiosInstance

  constructor(options: HttpClientOptions) {
    this.client = axios.create({
      baseURL: import.meta.env.DEV ? options.devBaseURL : options.baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
      responseType: 'json',
      // transformRequest: [
      //   (data) => {
      //     return data instanceof FormData ? data : stringify(data)
      //   },
      // ],
    })
  }

  get<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>) {
    return this.client.get<T>(url, config).then(res => res.data)
  }

  post<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>) {
    return this.client.post<T>(url, data, config).then(res => res.data)
  }
}

export const serveClient = new HttpClient({
  devBaseURL: '/serve-api',
  baseURL: import.meta.env.VITE_SERVE_API_HOST,
})

serveClient.client.interceptors.request.use((config) => {
  // config.headers['Token-Val'] = ''
  return config
}, (error) => {
  return Promise.reject(error)
})

export function catchMock<D>(mockRes: IApi.Res<D>) {
  return (err: Error): IApi.Res<D> => {
    if (import.meta.env.VITE_API_MOCK === 'Y')
      return mockRes
    else
      throw err
  }
}
