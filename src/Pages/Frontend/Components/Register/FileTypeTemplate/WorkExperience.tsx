/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import { Container, Col, Row, Form, Button } from "react-bootstrap"
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { SAVE_WORK, UPLOADED_FILES } from '../../../../../Constants/FileConstants';
import { useReference } from '../../../../../Hooks';
import fileService from '../../../../../Services/fileService';
import toast, { Toaster } from 'react-hot-toast'
import MD5 from 'crypto-js/md5'

 interface propsType {
    fileDoc: any;
    deletFile: (data:string)=>void
}
type FormValues = {
    workExperienceCompanyName: string;
    workExperienceJobrole: string;
    workExperienceStateDate: string;
    workExperienceEndDate: string;
  };

const WorkExperience = ({ fileDoc, deletFile }: propsType) => {
  const { register, watch, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const { uploadedFiles, uploaded, uploadProgress, workExperienceReducer } = useSelector((state:any) => state)

  const onSubmit = handleSubmit((data) => fileDoc({ ...data, fileType: "ssce" }));

  const dispatcher = useDispatch()
  const userRefId = useReference()
  const storedFiles: string[] = uploadedFiles

  console.log("userRefId", userRefId)

  const hashRef:any = MD5(userRefId.id).toString();

  const saveWorkExperience = (e:any) => {
    const workExperienceCompanyName = watch("workExperienceCompanyName")
    const workExperienceJobrole = watch("workExperienceJobrole")
    const workExperienceStateDate = watch("workExperienceStateDate")
    const workExperienceEndDate = watch("workExperienceEndDate")
    const field = { workExperienceCompanyName, workExperienceJobrole, workExperienceStateDate, workExperienceEndDate }
    const data = { WorkExperience: [...workExperienceReducer.WorkExperience, field] }
    dispatcher({ type: SAVE_WORK, data })
  }

  function removeItem (index:number) {
    console.log(index)
    const newData = workExperienceReducer.WorkExperience.splice(index, 1);
    const data = { WorkExperience: newData }
    dispatcher({ type: SAVE_WORK, data })
  }

  console.log("from redux", workExperienceReducer)
  return (
      <Container>
      <h5>Add your work experience</h5>
      <hr/>
      <br/>
      <Row>
          <Col>
          <Form.Group controlId="formBasicworkExperienceCompanyName">
              <Form.Label>Company name</Form.Label>
              <Form.Control type="text" {...register("workExperienceCompanyName")}/>
          </Form.Group>
          <Form.Group controlId="formBasicworkExperienceJobrole">
              <Form.Label>Job role</Form.Label>
              <Form.Control type="text" {...register("workExperienceJobrole")}/>
          </Form.Group>
          <Form.Group controlId="formBasicworkExperienceStateDate">
              <Form.Label>Start date</Form.Label>
              <Form.Control type="date" {...register("workExperienceStateDate")}/>
          </Form.Group>
          <Form.Group controlId="formBasicworkExperienceEndDate">
              <Form.Label>End date</Form.Label>
              <Form.Control type="date" {...register("workExperienceEndDate")}/>
          </Form.Group>

          <Button onClick={ saveWorkExperience } >Add</Button>
          </Col>

          <Col>
          <ul className="list-group">
          {workExperienceReducer.WorkExperience.length > 0 &&
              (workExperienceReducer.WorkExperience.map((items:any, index:any) => {
                return (
                  <li key={index} className="list-group-item mb-1 rounded">
                  <span>{items.workExperienceCompanyName}</span>,
                  <span> {items.workExperienceStateDate}</span> -
                  <span>{items.workExperienceEndDate}</span>
                  <button className="d-icon d-trash is-small bg-danger text-right text-white p-1 rounded-circle btn ml-4" onClick={() => removeItem(index)}></button>
                  </li>)
              }))
          }

           {workExperienceReducer.WorkExperience.length === 0 && ("start adding work experience")}
          </ul>
          </Col>

    <Toaster />
      </Row>
  </Container>
  )
}

export default WorkExperience
