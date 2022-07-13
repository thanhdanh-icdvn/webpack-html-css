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
  const loginOptions = {
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return new Promise<ResLoginApi>((resolve, reject) => {
    fetch('/api/v1/auth/login', loginOptions)
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        process.env.NODE_ENV === 'development' && console.log(result)
        if (result.code === 200) {
          resolve({
            data: {
              token: result.data.token
            },
            message: result.message
          })
        } else {
          reject(new Error(result.message))
        }
      })
      .catch((err) => {
        console.log(err)
        reject(err.message || err)
      })
  })
}
