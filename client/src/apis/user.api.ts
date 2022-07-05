const mockUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123',
    isAdmin: true
  },
  {
    id: 2,
    username: 'user',
    password: 'user',
    isAdmin: false
  }
]

export const getUserListApi = (): Promise<ResGetUserApi> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          users: mockUsers
        },
        message: 'Lấy user thành công'
      })
    }, 100)
  })

export const getUserItemApi = (username: string): Promise<ResGetUserItemApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find((user) => user.username === username)
      if (user) {
        resolve({
          data: {
            user
          },
          message: 'Lấy sản phẩm thành công'
        })
      } else {
        reject(new Error('Không tìm thấy sản phẩm'))
      }
    }, 100)
  })

export const loginApi = ({ username, password }: ReqLogin): Promise<ResLoginApi> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === '123') {
        resolve({
          data: {
            accessToken: '82jdu82193yh90sad83hxfgsd'
          },
          message: 'Login thành công'
        })
      } else {
        reject(new Error('Login thất bại'))
      }
    }, 100)
  })
}
