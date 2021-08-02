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
    deletFile: (data:string)=>void;
}
type FormValues = {
    signInfile: any;
    signOutfile: any;
    documentName: string;
    institutionName: string;
    numberOfYearsServiced: string;
    signalSignInReferenceNumber: string;
    signalSignOutReferenceNumber: string;
  };

const Service = ({ fileDoc, deletFile }: propsType) => {
  // eslint-disable-next-line no-unused-vars
  const { register, watch, getValues, formState: { errors } } = useForm<FormValues>();

  const { uploadedFiles, uploadProgress } = useSelector((state:any) => state)
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
    const fileType = "service"

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
    const institutionName = getValues("institutionName")
    const numberOfYearsServiced = getValues("numberOfYearsServiced")
    const signalSignOutReferenceNumber = getValues("signalSignOutReferenceNumber")
    const signalSignInReferenceNumber = getValues("signalSignInReferenceNumber")
    const fileType = "service"

    const resData = {
      files: [...uploadedNow],
      institutionName,
      numberOfYearsServiced,
      signalSignOutReferenceNumber,
      signalSignInReferenceNumber,
      fileType
    }

    dispatcher({ type: UPLOADED_FILES, data: [...storedFiles, resData] })
  }

  return (
          <Container>
          <h5>Service Information</h5>
          <hr/>
          <br/>
          <Row>
              <Col>
              <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Name of Institution</Form.Label>
                      <Form.Control as="select" size="sm" custom {...register("institutionName")} disabled={disable}>
                      <option value="1">Police Staff College Jos</option>
                      <option value="2">Police Academy Kano</option>
                      <option value="3">Police College Ikeja</option>
                      <option value="4">Police College Kaduna</option>
                      <option value="5">Police College Maiduguri</option>
                      <option value="6"> Police College Oji-River</option>
                      <option value="7">Police Detective College Enugu</option>
                      <option value="8">Police College of Information Technology Abeokuta</option>
                      <option value="9">Police Mobile Training School Gwoza</option>
                      <option value="10">Police Mobile Training School Ila-orangun</option>
                      <option value="11">Mounted/Dog Training Schools Jos</option>
                      <option value="12">Traffic Training School Ikeja</option>
                      <option value="13">Police School of Music Ikeja</option>
                      <option value="14">Police School of Communication Ikeja</option>
                      <option value="15">Police School of Communication Kaduna</option>
                      <option value="16">Police School of Anti-Terrorism Nonwa-Tai</option>
                      <option value="17">Police Training School Sokoto</option>
                      <option value="18">Police Training School Bauchi</option>
                      <option value="19">Police Training School Minna</option>
                      <option value="20">Police Training School Jos</option>
                      <option value="21">Police Training School Nonwa Tai</option>
                      <option value="22">Police Training School Ibadan</option>
                      <option value="23">Police Training School Benin City</option>
                      <option value="24">Police Training School Oyin Akoko</option>
                      <option value="25">Police Training School Makurdi</option>
                      <option value="26">Police Training School Iperu</option>
                      <option value="27">Police Training School Calabar</option>
                      <option value="28">Police Training School Ilorin</option>
                      <option value="29">Police Training School Ikeja</option>
                  </Form.Control>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Number of Years Serve</Form.Label>
                  <Form.Control type="number" {...register("numberOfYearsServiced")} disabled={disable}/>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Signal SignIn Reference No / DTO</Form.Label>
                  <Form.Control type="text" {...register("signalSignInReferenceNumber")} disabled={disable}/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Signal SignIn File</Form.Label>
                  <Form.Control type="file" {...register("signInfile")} onChange={uploadFile} disabled={disable}/>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Signal SignOut Reference No / DTO</Form.Label>
                  <Form.Control type="text" {...register("signalSignOutReferenceNumber")} disabled={disable}/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Signal SignOut File</Form.Label>
                  <Form.Control type="file" {...register("signOutfile")} onChange={uploadFile} disabled={disable}/>
              </Form.Group>
              {/* <!-- Progress Bar --> */}
                  {uploadProgress.service && (
              <div className="progress">
                  <div className={"progress-bar " + (uploadProgress.service < 99 ? "bg-danger" : "bg-success")} role="progressbar" style={{ width: uploadProgress.service + "%" }} aria-valuenow={uploadProgress.service} aria-valuemin={0} aria-valuemax={100}>{uploadProgress.service}%</div>
              </div>)}
              <Button onClick={ saveData }>Add</Button>
              </Col>

              <Col>
              <ul className="list-group">
              {uploadedFiles &&
                  (uploadedFiles.map((items:any, index:any) => {
                    return items.fileType === "service" && (
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

export default Service
