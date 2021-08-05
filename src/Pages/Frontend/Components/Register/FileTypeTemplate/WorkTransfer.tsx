/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Container, Col, Row, Form, Button } from "react-bootstrap"

import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { UPLOADED_FILES } from '../../../../../Constants/FileConstants';
import { useReference } from '../../../../../Hooks';
import fileService from '../../../../../Services/fileService';

 interface propsType {
    fileDoc: any;
    deletFile: (data:string)=>void
}
type FormValues = {
    signalSignInFile: any;
    workTransferDate: string;
  };

const WorkTransfer = ({ fileDoc, deletFile }: propsType) => {
  // eslint-disable-next-line no-unused-vars
  const { register, watch, getValues, formState: { errors } } = useForm<FormValues>();

  const { uploadedFiles, uploaded, uploadProgress } = useSelector((state:any) => state)
  // eslint-disable-next-line no-unused-vars
  const [uploadStatus, setUploadStatus] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [uploadedNow, setUploadedNow] = useState<any>([])
  const [disable, setDisable] = useState<boolean>(false)
  const dispatcher = useDispatch()
  const userNin = useReference()
  const storedFiles: string[] = uploadedFiles

  console.log(uploadedNow)

  const uploadFile = async (event: any) => {
    setUploadStatus(true)

    setDisable(true)
    const name = event.target.name
    const fileType = "workTransfer"
    const signalSignInFile = getValues("signalSignInFile")
    console.log(name)

    await fileService.uploadImage(signalSignInFile, fileType, dispatcher, userNin.nin).then((res:any) => {
      const resData = {
        remoteURL: res,
        fileType,
        name
      }
      setDisable(false)
      setUploadedNow([...uploadedNow, resData])
      setUploadStatus(false)
    }, (error: { message: any; }) => {
      console.log(error.message)
      setUploadStatus(false)
      toast.error("invalid file", { duration: 20000, className: 'bg-danger text-white' });
    })
  }

  const saveData = () => {
    const workTransferDate = getValues("workTransferDate")
    const fileType = "workTransfer"

    const resData = {
      files: [...uploadedNow],
      workTransferDate,
      fileType
    }

    dispatcher({ type: UPLOADED_FILES, data: [...storedFiles, resData] })
  }
  return (
          <Container>
              <h5>Work Transfer Information</h5>
              <hr/>
              <br/>
          <Row>
              <Col>
              <Form.Group controlId="transferDate">
                  <Form.Label>Date Transfer to Present Command</Form.Label>
                  <Form.Control type="date" {...register("workTransferDate")}/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Signal SignIn File</Form.Label>
                  <Form.Control type="file" {...register("signalSignInFile")} onChange={uploadFile}/>
              </Form.Group>
              {uploadStatus && (
                <div className="spinner-border spinner-border-sm text-success" role="status">
                <span className="sr-only">Loading...</span>
                </div>
              )}
              <Button onClick={ saveData }>Add</Button>
              </Col>

              <Col>
              <ul className="list-group">
              {uploadedFiles &&
                  (uploadedFiles.map((items:any, index:any) => {
                    return items.fileType === "workTransfer" && (
                      <li key={index} className="list-group-item list-group-item-success mb-1 rounded">
                      <a href={items.remoteURL} target="_blank" rel="noreferrer">
                      <span className="badge alert-success pull-right">{items.vipName}</span>
                      </a>
                      <span className="d-icon d-trash is-small bg-danger text-right text-white shadow-sm" onChange={() => deletFile(items?.fileType + "/" + items?.name)}></span>
                      </li>)
                  }))
              }
              </ul>
              </Col>
          </Row>
          <Toaster/>
      </Container>
  )
}

export default WorkTransfer
