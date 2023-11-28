export namespace IApi {

  export interface Res<DATA> {
    code: number
    data: DATA
    msg: string
  }

}
