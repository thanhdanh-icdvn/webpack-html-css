export interface IError {
  code: number;
  message: string | object | undefined;
  codeText?:string;
}