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
