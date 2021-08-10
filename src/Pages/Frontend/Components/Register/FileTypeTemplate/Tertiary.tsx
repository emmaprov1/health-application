/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Form, Button } from "react-bootstrap"
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { UPLOADED_FILES } from '../../../../../Constants/FileConstants';
import { useReference } from '../../../../../Hooks';
import fileService from '../../../../../Services/fileService';
import toast, { Toaster } from 'react-hot-toast'
import MD5 from 'crypto-js/md5';

interface propsType {
    fileDoc: any;
    deletFile: (data:string)=>void
}
type FormValues = {
    file: any;
    documentName: string;
  };

const Tertiary = ({ fileDoc, deletFile }: propsType) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const [certname, setCertname] = useState();
  const [uploadedFilesData, setUploadedFilesData] = useState([])

  const { uploadedFiles, uploaded, uploadProgress } = useSelector((state:any) => state)
  const [uploadStatus, setUploadStatus] = useState(false)
  const [uploadedNow, setUploadedNow] = useState("")
  const [refresh, setRefresh] = useState(true)

  const onSubmit = handleSubmit((data) => {
    fileDoc({ ...data, fileType: "tertiary" })
  }
  );

  const dispatcher = useDispatch()
  const userNin = useReference()
  const storedFiles: string[] = uploadedFiles

  const hashRef = MD5(userNin.id).toString();

  const uploadFile = async (event: any) => {
    console.log("uploading", certname)
    setUploadStatus(true)
    const file = event.target.files
    const fileType = "tertiary"
    await fileService.uploadImage(file, fileType, hashRef).then((res:any) => {
      console.log("DOWNLOAD URI", res)
      setRefresh(false)
      setRefresh(true)
      const resData = {
        remoteURL: res,
        name: file[0].name,
        size: (file[0].size / 1048576).toFixed(2),
        fileType,
        certificate_name: certname
      }
      setUploadedNow(res)
      dispatcher({ type: UPLOADED_FILES, data: [...storedFiles, resData] })
      setUploadStatus(false)
    }, error => {
      console.log(error.message)
      setUploadStatus(false)
      toast.error("invalid file", { duration: 20000, className: 'bg-danger text-white' });
    })
  }

  async function removeFile (data:string, index:number) {
    uploadedFiles.splice(index, 1);
    dispatcher({ type: UPLOADED_FILES, data: uploadedFiles })

    setUploadedFilesData(() => {
      return uploadedFiles
    })

    await fileService.deleteFile(data).then((res) => {
      toast.success("Deleted file successfully", { duration: 20000, className: 'bg-success text-white' });
      setRefresh(false)
      setRefresh(true)
    }, error => {
      return console.log(error.message)
    })
  }

  useEffect(() => {
    setUploadedFilesData(uploadedFiles)
  }, [uploadedFiles])

  return (
    <Container>
    <h5>Tertiary Education Information</h5>
    <hr/>
    <br/>
    <Row>
        <Col>
        <Form.Group controlId="exampleForm.ControlSelect1">

            <Form.Label>Choose certificate type</Form.Label>
            <select className="form-control" {...register("documentName")} onChange={(e:any) => setCertname(e.target.value)}>
            <option>--choose--</option>
             <option>OND</option>
            <option>B.SC</option>
            <option>HND</option>
            <option>MSC</option>
            </select>

        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Upload file</Form.Label>

            <Form.Label>Choose file</Form.Label>
              <Form.Control type="file" onChange={uploadFile} disabled={uploadStatus}/>
              <Form.Control type="text" {...register("file")} value={uploadedNow} hidden/>

              {uploadStatus && (
            <div className="spinner-border spinner-border-sm text-success" role="status">
            <span className="sr-only">Loading...</span>
            </div>
              )}
        </Form.Group>
        {/* <Button onClick={ onSubmit }>Add</Button> */}
        </Col>

        <Col>
        <ul className="list-group">
          {refresh &&
            (uploadedFiles.map((items:any, index:any) => {
              return items.fileType === "tertiary" && (
                <li key={index} className="list-group-item list-group-item-success mb-1 rounded">
                  <a href={items.remoteURL} target="_blank" rel="noreferrer">
                  <span className="badge alert-success pull-right">{items.size}mb</span>{items.name}
                  </a>
                  <button className="d-icon d-trash is-small bg-danger text-right text-white btn p-1 border-0 ml-3 rounded-circle" onClick={() => removeFile(`${hashRef}/${items?.fileType}/${items?.fileType}_${items?.name}`, index)}></button>
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

export default Tertiary
