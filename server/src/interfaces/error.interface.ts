export interface IError {
  code?: number;
  status?:number;
  message?: string | object | undefined;
  codeText?:string;
}