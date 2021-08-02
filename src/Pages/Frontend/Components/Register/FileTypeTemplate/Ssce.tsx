/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Container, Col, Row, Form, Button } from "react-bootstrap"
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { UPLOADED_FILES } from '../../../../../Constants/FileConstants';
import { useNin } from '../../../../../Hooks';
import fileService from '../../../../../Services/fileService';
import toast, { Toaster } from 'react-hot-toast'

 interface propsType {
    fileDoc: any;
    deletFile: (data:string)=>void
}
type FormValues = {
    file: any;
    documentName: string;
  };

const Ssce = ({ fileDoc, deletFile }: propsType) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const { uploadedFiles, uploaded, uploadProgress } = useSelector((state:any) => state)
  const [uploadStatus, setUploadStatus] = useState(false)
  const [uploadedNow, setUploadedNow] = useState("")

  const onSubmit = handleSubmit((data) => fileDoc({ ...data, fileType: "ssce" }));

  const dispatcher = useDispatch()
  const userNin = useNin()
  const storedFiles: string[] = uploadedFiles

  const uploadFile = async (event: any) => {
    console.log("uploading")
    setUploadStatus(true)
    const file = event.target.files
    const fileType = "ssce"
    await fileService.uploadImage(file, fileType, dispatcher, userNin.nin).then((res:any) => {
      console.log("DOWNLOAD URI", res)
      const resData = {
        remoteURL: res,
        name: file[0].name,
        size: (file[0].size / 1048576).toFixed(2),
        fileType
      }
      setUploadedNow(res[0])
      dispatcher({ type: UPLOADED_FILES, data: [...storedFiles, resData] })
      setUploadStatus(false)
    }, error => {
      console.log(error.message)
      setUploadStatus(false)
      toast.error("invalid file", { duration: 20000, className: 'bg-danger text-white' });
    })
  }

  return (
      <Container>
      <h5>SSCE Uertificate Upload</h5>
      <hr/>
      <br/>
      <Row>
          <Col>
          <Form.Group controlId="exampleForm.ControlSelect1">

              <Form.Label>Choose document type</Form.Label>
              <Form.Control as="select" {...register("documentName")} disabled={uploadStatus}>
              <option>WAEC</option>
              <option>NECO</option>
              <option>NABTEB</option>
              <option>GCE</option>
              </Form.Control>

          </Form.Group>
          <Form.Group controlId="formBasicPassword">
              <Form.Label>Choose file</Form.Label>
              <Form.Control type="file" onChange={uploadFile} disabled={uploadStatus}/>
              <Form.Control type="text" {...register("file")} value={uploadedNow} hidden/>

              {uploadStatus && (
            <div className="spinner-border spinner-border-sm text-success" role="status">
            <span className="sr-only">Loading...</span>
            </div>
              )}
          </Form.Group>
          {/* <!-- Progress Bar --> */}

          <Button onClick={ onSubmit } disabled={uploadStatus}>Add</Button>
          </Col>

          <Col>
          <ul className="list-group">
          {uploadedFiles &&
              (uploadedFiles.map((items:any, index:any) => {
                return (items.fileType === "ssce" && (
                  <li key={index} className="list-group-item list-group-item-success mb-1 rounded">
                  <a href={items.remoteURL} target="_blank" rel="noreferrer">
                  <span className="badge alert-success pull-right">{items.size}mb</span>{items.name}
                  </a>
                  <span className="d-icon d-trash is-small bg-danger text-right text-white shadow-sm" onChange={() => deletFile(items?.fileType + "/" + items?.name)}></span>
                  </li>))
              }))
          }
          </ul>
          </Col>

    <Toaster />
      </Row>
  </Container>
  )
}

export default Ssce
