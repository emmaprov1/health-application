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
    signalAsignmentFile: any;
    vipName: string;
    shortDescription: string;
    medicalFile: string;
};

const VipAssignment = ({ fileDoc, deletFile }: propsType) => {
  // eslint-disable-next-line no-unused-vars
  const { register, watch, getValues, formState: { errors } } = useForm<FormValues>();

  const { uploadedFiles, uploadProgress } = useSelector((state:any) => state)
  // eslint-disable-next-line no-unused-vars
  const [uploadStatus, setUploadStatus] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [uploadedNow, setUploadedNow] = useState<any>([])
  // eslint-disable-next-line no-unused-vars
  const [disable, setDisable] = useState<boolean>(false)
  const dispatcher = useDispatch()
  const userNin = useNin()
  const storedFiles: string[] = uploadedFiles

  console.log(uploadedFiles)

  const uploadFile = async (event: any) => {
    setUploadStatus(true)

    setDisable(true)
    const name = "signalAsignmentFile"
    const fileType = "vipAsignment"
    const signalAsignmentFile = getValues("signalAsignmentFile")
    console.log(name)

    await fileService.uploadImage(signalAsignmentFile, fileType, dispatcher, userNin.nin).then((res:any) => {
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
    const vipName = getValues("vipName")
    const shortDescription = getValues("shortDescription")
    const fileType = "vipAsignment"

    const resData = {
      files: [...uploadedNow],
      vipName,
      shortDescription,
      fileType
    }

    dispatcher({ type: UPLOADED_FILES, data: [...storedFiles, resData] })
  }
  return (
          <Container>

                <h5>VIP Personnel Information</h5>
              <hr/>
              <br/>
          <Row>
              <Col>
              <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>VIP Personnel Name</Form.Label>
                  <Form.Control type="text" {...register("vipName")} disabled={uploadStatus}/>
              </Form.Group>

             <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Short Description of VIP Duty</Form.Label>
                <Form.Control type="textarea" {...register("shortDescription")} disabled={uploadStatus}/>
             </Form.Group>

              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Upload Signal Assignment File</Form.Label>
                  <Form.Control type="file" {...register("signalAsignmentFile")} onChange={uploadFile}/>
              </Form.Group>

              {/* <!-- Progress Bar --> */}
                  {uploadProgress.vipAssignment && (
              <div className="progress">
                  <div className={"progress-bar " + (uploadProgress.vipAssignment < 99 ? "bg-danger" : "bg-success")} role="progressbar" style={{ width: uploadProgress.vipAssignment + "%" }} aria-valuenow={uploadProgress.vipAssignment} aria-valuemin={0} aria-valuemax={100}>{uploadProgress.vipAssignment}%</div>
              </div>)}
              <Button onClick={ saveData } disabled={uploadStatus}>Add</Button>
              </Col>

              <Col>
              <ul className="list-group">
              {uploadedFiles &&
                  (uploadedFiles.map((items:any, index:any) => {
                    return items.fileType === "vipAsignment" && (
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

export default VipAssignment
