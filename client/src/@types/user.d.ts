interface User {
  id: number
  username: string
  password: string
  isAdmin: boolean
  thumbnail: string
  avatar: stringg
}

interface ReqLogin {
  username: string
  password: string
}
interface ResLoginApi extends Res {
  data?: {
    token?: string
  }
  message?: string
}

type ResLogin = ActionRedux

interface ResGetUserApi extends Res {
  data: {
    users: User[]
  }
}

interface ResGetUser extends ActionRedux {
  payload: ResGetUserApi
}

interface ResGetUserItemApi extends Res {
  data: {
    user: User
  }
}

interface ResGetProductItem extends ActionRedux {
  payload: ResGetProductItemApi
}
