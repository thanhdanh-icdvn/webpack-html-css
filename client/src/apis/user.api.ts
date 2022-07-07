const mockUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123',
    isAdmin: true,
    thumbnail: 'https://via.placeholder.com/600/92c952',
    avatar: 'https://via.placeholder.com/150/92c952'
  },
  {
    id: 2,
    username: 'user',
    password: 'user',
    isAdmin: false,
    thumbnail: 'https://via.placeholder.com/600/771796',
    avatar: 'https://via.placeholder.com/150/24f355'
  }
]

export const getUserListApi = (): Promise<ResGetUserApi> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          users: mockUsers
        },
        message: 'Get user succeed'
      })
    }, 100)
  })

export const getUserItemApi = (id: string | number): Promise<ResGetUserItemApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find((user) => +user.id == id)
      if (user) {
        resolve({
          data: {
            user
          },
          message: 'Get users succeed'
        })
      } else {
        reject(new Error('No users found'))
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
          message: 'Login succeed'
        })
      } else {
        reject(new Error('Login failed'))
      }
    }, 100)
  })
}
