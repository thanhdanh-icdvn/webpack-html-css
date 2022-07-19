import MainLayout from '@/layouts/MainLayout'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDropzone } from 'react-dropzone'
import { Thumb, ThumbsContainer, ThumbImage, ThumbInner } from './FileManager.styles'

interface FileWithPreview extends File {
  preview: string
}
const FileManager: React.FC<unknown> = (): JSX.Element => {
  const [files, setFiles] = useState<FileWithPreview[]>([])
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

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
  })
  return (
    <MainLayout>
      <Helmet>
        <title>File manager</title>
      </Helmet>
      <div>
        <h3>File Manager</h3>
        <section className='container'>
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Drag and drop some files here, or click to select files</p>
          </div>
          <ThumbsContainer>{thumbs}</ThumbsContainer>
        </section>
      </div>
    </MainLayout>
  )
}

export default FileManager
