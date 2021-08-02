/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Container, Col, Row, Form, Button } from "react-bootstrap"

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
    conditionName: string;
    shortDescription: string;
    medicalFile: string;
  };

const DisabledSickness = ({ fileDoc, deletFile }: propsType) => {
  // eslint-disable-next-line no-unused-vars
  const { register, watch, getValues, formState: { errors } } = useForm<FormValues>();

  const { uploadedFiles, uploaded, uploadProgress } = useSelector((state:any) => state)
  // eslint-disable-next-line no-unused-vars
  const [uploadStatus, setUploadStatus] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [uploadedNow, setUploadedNow] = useState<any>([])
  const [disable, setDisable] = useState<boolean>(false)
  const dispatcher = useDispatch()
  const userNin = useNin()
  const storedFiles: string[] = uploadedFiles

  console.log(uploadedNow)

  const uploadFile = async (event: any) => {
    setUploadStatus(true)

    setDisable(true)
    const name = event.target.name
    const fileType = "disabledSickness"
    const signalSignInFile = getValues("medicalFile")
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
    const conditionName = getValues("conditionName")
    const shortDescription = getValues("shortDescription")
    const fileType = "disabledSickness"

    const resData = {
      files: [...uploadedNow],
      conditionName,
      shortDescription,
      fileType
    }

    dispatcher({ type: UPLOADED_FILES, data: [...storedFiles, resData] })
  }
  return (
          <Container>
          <h5>Sickness / Disability Information</h5>
          <hr/>
          <br/>
          <Row>
              <Col>
              <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Sickness / Disability Name</Form.Label>
                  <Form.Control type="text" {...register("conditionName")}/>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Short Description of Incident</Form.Label>
                  <Form.Control type="textarea" {...register("shortDescription")}/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Upload medical File</Form.Label>
                  <Form.Control type="file" {...register("medicalFile")} onChange={uploadFile}/>
              </Form.Group>
              {/* <!-- Progress Bar --> */}
                {uploadProgress.workshop && (
              <div className="progress">
                  <div className={"progress-bar " + (uploadProgress.workshop < 99 ? "bg-danger" : "bg-success")} role="progressbar" style={{ width: uploadProgress.workshop + "%" }} aria-valuenow={uploadProgress.tertiary} aria-valuemin={0} aria-valuemax={100}>{uploadProgress.tertiary}%</div>
              </div>)}
              <Button onClick={ saveData }>Add</Button>
              </Col>

              <Col>
              <ul className="list-group">
              {uploadedFiles &&
                  (uploadedFiles.map((items:any, index:any) => {
                    return items.fileType === "disabledSickness" && (
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
      </Container>
  )
}

export default DisabledSickness
