/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Container, Col, Row, Form, Button } from "react-bootstrap"

import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux'
import fileService from '../../../../../Services/fileService';

import { UPLOADED_FILES } from '../../../../../Constants/FileConstants';
import { useNin } from '../../../../../Hooks';

import toast, { Toaster } from 'react-hot-toast'

 interface propsType {
    fileDoc: any;
    deletFile: (data:string)=>void
}
type FormValues = {
    file: any;
    documentName: string;
  };

const Workshop = ({ fileDoc, deletFile }: propsType) => {
  // eslint-disable-next-line no-unused-vars
  const { register, watch, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const { uploadedFiles, uploaded, uploadProgress } = useSelector((state:any) => state)
  // eslint-disable-next-line no-unused-vars
  const [uploadStatus, setUploadStatus] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [uploadedNow, setUploadedNow] = useState("")
  const dispatcher = useDispatch()
  const userNin = useNin()
  const storedFiles: string[] = uploadedFiles

  const uploadFile = async (event: any) => {
    setUploadStatus(true)
    const documentName = watch("documentName")
    const file = event.target.files
    const fileType = "workshop"
    await fileService.uploadImage(file, fileType, dispatcher, userNin.nin).then((res:any) => {
      const resData = {
        remoteURL: res,
        name: documentName,
        size: (file[0].size / 1048576).toFixed(2),
        fileType
      }
      setUploadedNow(res[0])
      dispatcher({ type: UPLOADED_FILES, data: [...storedFiles, resData] })
      setUploadStatus(false)
    }, (error: { message: any; }) => {
      console.log(error.message)
      setUploadStatus(false)
      toast.error("invalid file", { duration: 20000, className: 'bg-danger text-white' });
    })
  }

  return (
          <Container>
          <h5>Workshop Attended Information</h5>
          <hr/>
          <br/>
          <Row>
              <Col>
              <Form.Group controlId="exampleForm.ControlSelect1">

                  <Form.Label>Workshop name</Form.Label>
                  <Form.Control type="text" {...register("documentName")}/>

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

              </Col>

              <Col>
              <ul className="list-group">
                {uploadedFiles &&
                  (uploadedFiles.map((items:any, index:any) => {
                    return items.fileType === "workshop" && (
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

export default Workshop
