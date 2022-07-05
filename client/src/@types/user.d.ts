interface ReqLogin {
  username: string
  password: string
}
interface ResLoginApi extends Res {
  data: {
    accessToken: string
  }
  message: string
}

type ResLogin = ActionRedux
