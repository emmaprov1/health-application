import React, { useState } from 'react'
import { Container, Col, Row, Form, Button } from "react-bootstrap"

import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux'
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

const Symposium = ({ fileDoc, deletFile }: propsType) => {
  // eslint-disable-next-line no-unused-vars
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const { uploadedFiles, uploaded, uploadProgress } = useSelector((state:any) => state)
  const [uploadStatus, setUploadStatus] = useState(false)
  const [uploadedNow, setUploadedNow] = useState("")

  const onSubmit = handleSubmit((data) => fileDoc({ ...data, fileType: "symposium" }));

  const dispatcher = useDispatch()
  const userNin = useNin()
  const storedFiles: string[] = uploadedFiles

  const uploadFile = async (event: any) => {
    setUploadStatus(true)
    const file = event.target.files
    const fileType = "symposium"
    await fileService.uploadImage(file, fileType, dispatcher, userNin.nin).then((res:any) => {
      console.log(res)
      setUploadedNow(res.remoteURL)
      dispatcher({ type: UPLOADED_FILES, data: [...storedFiles, res] })
      setUploadStatus(false)
    }, error => {
      console.log(error.message)
      setUploadStatus(false)
      toast.error("invalid file", { duration: 20000, className: 'bg-danger text-white' });
    })
  }

  return (
          <Container>
          <h5>Symposium Information</h5>
          <hr/>
          <br/>
          <Row>
              <Col>
              <Form.Group controlId="exampleForm.ControlSelect1">

                  <Form.Label>Symposium name</Form.Label>
                  <Form.Control type="text" {...register("documentName")}/>

              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Upload Certificate</Form.Label>
                    <Form.Control type="file" onChange={uploadFile} disabled={uploadStatus}/>
                    <Form.Control type="text" {...register("file")} value={uploadedNow} hidden/>
                  {uploadStatus && (
                    <div className="spinner-border spinner-border-sm text-success" role="status">
                    <span className="sr-only">Loading...</span>
                    </div>
                  )}
              </Form.Group>
              {/* <!-- Progress Bar --> */}
                  {uploadProgress.symposium && (
              <div className="progress">
                  <div className={"progress-bar " + (uploadProgress.symposium < 99 ? "bg-danger" : "bg-success")} role="progressbar" style={{ width: uploadProgress.symposium + "%" }} aria-valuenow={uploadProgress.symposium} aria-valuemin={0} aria-valuemax={100}>{uploadProgress.symposium}%</div>
              </div>)}
              <Button onClick={ onSubmit }>Add</Button>
              </Col>

              <Col>
              <ul className="list-group">
              {uploaded &&
                  (uploaded.map((items:any, index:any) => {
                    return items.fileType === "symposium" && (
                      <li key={index} className="list-group-item list-group-item-success mb-1 rounded">
                      <a href={items.remoteURL} target="_blank" rel="noreferrer">
                      <span className="badge alert-success pull-right">{items.size}mb</span>{items.name}
                      </a>
                      <span className="d-icon d-trash is-small bg-danger text-right text-white shadow-sm" onChange={() => deletFile(items?.fileType + "/" + items?.name)}></span>
                      </li>)
                  }))
              }
              </ul>
              </Col>
          <Toaster/>
          </Row>
      </Container>
  )
}

export default Symposium
