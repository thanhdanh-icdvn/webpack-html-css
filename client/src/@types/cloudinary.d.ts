interface FileWithPreview extends File {
  preview: string
}
interface CloudinaryResource {
  asset_id: string
  public_id: string
  format: string
  version: number
  resource_type: string
  type: string
  created_at: string
  bytes: number
  with: number
  height: number
  folder: string
  url: string
  secure_url: string
}

interface ResGetAllCloudinaryResourceApi extends Res {
  data: {
    resources: CloudinaryResource[]
  }
}

interface ResGetAllCloudinaryResource extends ActionRedux {
  payload: ResCloudinaryResourceApi
}
