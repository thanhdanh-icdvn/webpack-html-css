export interface IMailOptions{
  host:string;
  port:number; // 465
  secure:true; // use TLS
  auth:{
    user:string,
    pass:string
  };
}