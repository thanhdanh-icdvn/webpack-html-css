interface IError {
  code: number
  statusText?: string
  message?: string | object | undefined | null
  stack?: string
}
