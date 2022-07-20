export const getAllCloudinaryResourcesApi = (): Promise<ResGetAllCloudinaryResourceApi> => {
  const getAllCloudinaryResourceOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: ('Bearer ' + localStorage.getItem('token')) as string
    }
  }
  return new Promise<ResGetAllCloudinaryResourceApi>((resolve, reject) => {
    fetch('/api/v1/upload/cloudinary/resources', getAllCloudinaryResourceOptions)
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        process.env.NODE_ENV === 'development' && console.log(result)
        if (result.code === 200) {
          resolve({
            data: {
              resources: result.data.resources
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
