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
    promotionRank: string;
    signalSignInFile : string;
    datePromotedToSubstansiveRank: string;
  };

const Promotion = ({ fileDoc, deletFile }: propsType) => {
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
    const file = getValues("signalSignInFile")
    const name = event.target.name
    const fileType = "promotion"
    console.log(name)
    const promotionRank = getValues("promotionRank")
    const datePromotedToSubstansiveRank = getValues("datePromotedToSubstansiveRank")

    await fileService.uploadImage(file, fileType, dispatcher, userNin.nin).then((res:any) => {
      const resData = {
        remoteURL: res,
        fileType,
        name,
        promotionRank,
        datePromotedToSubstansiveRank
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
    const promotionRank = getValues("promotionRank")
    const datePromotedToSubstansiveRank = getValues("datePromotedToSubstansiveRank")
    const fileType = "promotion"

    const resData = {
      files: [...uploadedNow],
      promotionRank,
      datePromotedToSubstansiveRank,
      fileType
    }

    dispatcher({ type: UPLOADED_FILES, data: [...storedFiles, resData] })
  }

  return (
          <Container>
          <h5>Work Promotion Information</h5>
          <hr/>
          <br/>
          <Row>
              <Col>
              <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Promotion Rank</Form.Label>
                  <select className="form-control rounded-0" {...register("promotionRank", {
                    required: 'this is a required field',
                    pattern: {
                      value:
                         /^[a-zA-Z0-9-]*$/,
                      message: 'Invalid input',
                    }
                  })}>
                        <option> Please select </option>
                        <option>Inspector General</option>
                        <option>Deputy Inspector-General of Police</option>
                        <option>Assistant Inspector-General of Police</option>
                        <option>Commissioner of Police</option>
                        <option>Deputy Commissioner of Police</option>
                        <option>Assistant Commissioner of Police</option>
                        <option>Chief Superintendent of Police</option>
                        <option>Superintendent of Police</option>
                        <option>Deputy Superintendent of Police</option>
                        <option>Assistant Superintendent of Police I</option>
                        <option>Assistant Superintendent of Police II</option>
                        <option>Chief Inspector</option>
                        <option>Principal Inspector</option>
                        <option>Senior Inspector</option>
                        <option>Confirm Inspector</option>
                        <option>Unconfirm Inspector</option>
                        <option>Sergeant Major</option>
                        <option>Sergeant</option>
                        <option>Corporal</option>
                        <option>Constable</option>
                    </select>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Date Promoted to Substansive Rank</Form.Label>
                  <Form.Control type="date" {...register("datePromotedToSubstansiveRank")}/>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Signal SignIn File</Form.Label>
                  <Form.Control type="file" {...register("signalSignInFile")} onChange={uploadFile}/>
              </Form.Group>
              {/* <!-- Progress Bar --> */}
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
                    return items.fileType === "promotion" && (
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

export default Promotion
