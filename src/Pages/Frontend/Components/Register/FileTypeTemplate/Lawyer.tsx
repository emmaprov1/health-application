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
    documentName: string;
    dateCallToBar: string;
    courseAttended : string;
    dateAttended : string;
    callToBarCertificateFile: string;
    certificateFile: string;
  };

const Lawyer = ({ fileDoc, deletFile }: propsType) => {
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

    setDisable(false)
    const file = event.target.files
    const name = event.target.name
    const fileType = "lawyer"

    await fileService.uploadImage(file, fileType, dispatcher, userNin.nin).then((res:any) => {
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
    const institutionName = getValues("dateCallToBar")
    const numberOfYearsServiced = getValues("courseAttended")
    const dateAttended = getValues("dateAttended")
    const fileType = "lawyer"

    const resData = {
      files: [...uploadedNow],
      institutionName,
      numberOfYearsServiced,
      dateAttended,
      fileType
    }

    dispatcher({ type: UPLOADED_FILES, data: [...storedFiles, resData] })
  }
  return (
          <Container>
          <h5>Lawyer Information</h5>
          <hr/>
          <br/>
          <Row>
              <Col>
              <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Date Call to Bar</Form.Label>
                  <Form.Control type="date" {...register("dateCallToBar")}/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Course attended</Form.Label>
                  <Form.Control type="text" {...register("courseAttended")}/>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Date Attended</Form.Label>
                  <Form.Control type="date" {...register("dateAttended")}/>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Call to Bar Certificate File</Form.Label>
                  <Form.Control type="file" {...register("callToBarCertificateFile")} onChange={uploadFile}/>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Certificate File</Form.Label>
                  <Form.Control type="file" {...register("certificateFile")} onChange={uploadFile}/>
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
                    return items.fileType === "lawyer" && (
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

export default Lawyer
