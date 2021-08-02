import React, { useState } from 'react'
import { Container, Col, Row, Form } from "react-bootstrap"

import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { UPLOADED_FILES } from '../../../../../Constants/FileConstants';
import { useNin } from '../../../../../Hooks';
import fileService from '../../../../../Services/fileService';

 interface propsType {
    fileDoc: any;
    deletFile: (data:string)=>void
}
type FormValues = {
    file: any;
    documentName: string;
  };

const Conference = ({ fileDoc, deletFile }: propsType) => {
// eslint-disable-next-line no-unused-vars
  const { register, watch, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const { uploadedFiles } = useSelector((state:any) => state)
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
    const fileType = "conference"
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
              <h5>Conference issued certificate</h5>
              <hr/>
              <br/>
          <Row>
              <Col>
              <Form.Group controlId="exampleForm.ControlSelect1">

                  <Form.Label>Conference name</Form.Label>
                  <Form.Control type="text" {...register("documentName")}/>

              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Upload issued certificate</Form.Label>
                  <Form.Control type="file" {...register("file")} onChange={uploadFile} />
              </Form.Group>

              {uploadStatus && (
                <div className="spinner-border spinner-border-sm text-success" role="status">
                <span className="sr-only">Loading...</span>
                </div>
              )}

              </Col>

              <Col>
              <ul className="list-group">
                {uploadedFiles &&
                  (uploadedFiles.map((items:any, index:any) => {
                    return items.fileType === "conference" && (
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
          </Row>
      </Container>
  )
}

export default Conference
