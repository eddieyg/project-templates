export namespace ITool {

  export type Override<P, S> = Omit<P, keyof S> & S

}
