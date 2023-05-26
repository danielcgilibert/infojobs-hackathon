'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
enum EMessage {
  success = 'success',
  error = 'error',
}

interface IUploader {
  setCvData: (text: []) => void
}

export default function Uploader({ setCvData }: IUploader) {
  const [loading, setLoading] = useState(false)

  const onDrop = useCallback((acceptedFiles: any) => {
    if (acceptedFiles.length === 0) {
      console.log('no se puede')
    }

    const formData = new FormData()
    setLoading(true)
    formData.append('file', acceptedFiles[0])
    fetch('api/upload', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setCvData(res.data)
      })
      .finally(() => setLoading(false))
  }, [])

  const { getRootProps, getInputProps, isDragActive, isDragAccept } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      accept: {
        'application/pdf': ['.pdf'],
      },
    })

  return (
    <>
      <div
        className="border-dashed border-2   w-full h-64 border-[#B8B8B8] bg-white flex justify-center items-center text-center  rounded text-base px-10 cursor-pointer"
        {...getRootProps()}>
        <input {...getInputProps()} />

        <>
          {loading ? (
            <p className="min-w-full">Loading</p>
          ) : (
            <div className="flex flex-col justify-center items-center gap-2">
              <img src="cv-upload.png" alt="cv-upload" />
              <p>Click, or drag your files into this area to upload</p>
              <button className="bg-[#167DB7] text-white rounded px-4 py-2">
                Click to upload your files
              </button>
              <span className="text-xs text-[#89898A]">
                Formato .PDF - Max. 5MB
              </span>
            </div>
          )}
        </>
      </div>
    </>
  )
}

export function Message({
  children,
  type,
}: {
  children: React.ReactNode
  type: EMessage
}) {
  return <span className={`px-12 py-5  text-black rounded`}>{children}</span>
}
