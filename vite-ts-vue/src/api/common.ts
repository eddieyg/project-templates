import { catchMock, serveClient } from './client'
import type { IApi } from '@/types'

export interface TestItem {
  name: string
  id: number
}
export const queryTestList = () =>
  serveClient.get<IApi.Res<TestItem[]>>('/common/testList')
    .catch(
      catchMock<TestItem[]>({
        data: [
          {
            name: 'edd',
            id: 101,
          },
          {
            name: 'ded',
            id: 102,
          },
        ],
        code: 200,
        msg: '',
      }),
    )

export const execTestCreate = (data: { name: string }) =>
  serveClient.post<IApi.Res<TestItem>>('/test/create', data)
    .catch(
      catchMock<TestItem>({
        code: 200,
        data: {
          name: 'dde',
          id: 103,
        },
        msg: '',
      }),
    )
