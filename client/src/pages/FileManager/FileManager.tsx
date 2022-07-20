import MainLayout from '@/layouts/MainLayout'
import { ChangeEvent, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDropzone } from 'react-dropzone'
import { Thumb, ThumbsContainer, ThumbImage, ThumbInner } from './FileManager.styles'
import { connect, ConnectedProps } from 'react-redux'
import { getAllCloudinaryResources } from './FileManager.thunks'
import { ImageSlider } from './ImageSlider'

const mapStateToProps = (state: AppState) => ({
  loading: state.resources.loading,
  resources: state.resources.resources
})

const mapDispatchToProps = {
  getAllCloudinaryResources
}
type FileManagerProps = ConnectedProps<typeof connector>

const connector = connect(mapStateToProps, mapDispatchToProps)
const FileManager: React.FC<FileManagerProps> = (props: FileManagerProps): JSX.Element => {
  const [files, setFiles] = useState<FileWithPreview[]>([])
  const [imageSize, setImageSize] = useState<number>(400)
  const { getAllCloudinaryResources, resources } = props
  useEffect(() => {
    getAllCloudinaryResources()
  }, [getAllCloudinaryResources])
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop(acceptedFiles) {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )
      console.log(files)
    }
  })

  const thumbs = files.map((file) => (
    <Thumb key={file.name} className='thumb'>
      <ThumbInner className='thumbInner'>
        <ThumbImage
          className='img'
          alt={file.name}
          src={file.preview}
          onLoad={() => {
            URL.revokeObjectURL(file.preview)
          }}
        />
      </ThumbInner>
    </Thumb>
  ))

  const handleChangeImageSize = (event: ChangeEvent<HTMLInputElement>) => {
    setImageSize(Number.parseFloat(event.target.value))
  }

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
  })
  return (
    <MainLayout>
      <Helmet>
        <title>File manager</title>
      </Helmet>
      <div className=''>
        <section>
          <h3>File Manager</h3>
          <div className='container'>
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <p>Drag and drop some files here, or click to select files</p>
            </div>
            <ThumbsContainer>{thumbs}</ThumbsContainer>
            <div
              style={{
                display: 'block',
                width: '100%'
              }}
            >
              <input
                type='range'
                min={200}
                max={1000}
                value={imageSize || 200}
                onChange={handleChangeImageSize}
                id={'image-slider'}
                style={{
                  display: 'inline-block',
                  width: '100%',
                  cursor: 'pointer'
                }}
              />
              <input
                type='number'
                id='textInput'
                value={imageSize || 200}
                onChange={(e) => setImageSize(Number.parseFloat(e.target.value))}
              />
              <label htmlFor='textInput'>Image size</label>
            </div>
            {resources &&
              resources.map((image) => {
                return (
                  <img
                    key={image.asset_id}
                    src={image.url}
                    alt={image.public_id}
                    srcSet={image.url}
                    width={imageSize || 200}
                    height={imageSize || 200}
                    className='m-3'
                    style={{
                      maxWidth: '100%',
                      aspectRatio: '16/9',
                      objectFit: 'cover'
                    }}
                  />
                )
              })}
          </div>
        </section>
        <section>
          <h3>Image slider</h3>
          <div className='container'>
            <ImageSlider images={resources} imageHeight={imageSize} />
          </div>
        </section>
      </div>
    </MainLayout>
  )
}

export default connector(FileManager)
