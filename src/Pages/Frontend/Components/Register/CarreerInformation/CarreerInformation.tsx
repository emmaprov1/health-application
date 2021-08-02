import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import fileService from '../../../../../Services/fileService'
import { FileUploadManager } from '../../Index'
import Form from "react-bootstrap/Form"
interface propsType {
    register: any;
    errors: any;
    handleChange: any;
    value: any;
    fileDoc: (data:any) => void
}
const CarreerInformation:FC<propsType> = ({ register, errors, handleChange, value, fileDoc }) => {
  // eslint-disable-next-line no-unused-vars
  const { uploadedFiles, disableStatus, uploadProgress } = useSelector((state:any) => state)

  const [showActivity, setShowActivity] = useState<boolean>(false)
  // eslint-disable-next-line no-unused-vars
  const [fileType, setFileType] = useState<number>(0)

  console.log(uploadedFiles)

  const handleShow = () => setShowActivity(!showActivity);

  console.log(uploadedFiles)

  const deletFile = async (data:string) => {
    alert(data)
    await fileService.deleteFile(data).then((res) => {
      return res
    }, error => {
      console.log(error.message)
    })
  }
  return (
    <div className="card">
        <div className="card-header">
            <div className="c-header-crib-2">
                <span></span>
                <span></span>
                <span></span>
            </div>
            Career Information
            <div className="c-header-crib">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        {!disableStatus &&
        (<div className="card-body">

      <div className="container w-50">

          <Form.Group controlId="service">
            <Form.Check type="checkbox" label="(1) Have you served in any Institution?" {...register("service")} value="1" onClick={() => { handleShow(); setFileType(4) }}/>
          </Form.Group>

          <Form.Group controlId="promotion">
            <Form.Check type="checkbox" label="(2) Have you been Promoted Before ?" {...register("promotion")} value="1" onClick={() => { handleShow(); setFileType(2) }}/>
          </Form.Group>

          <Form.Group controlId="transfer">
            <Form.Check type="checkbox" label="(3) Have you been Transferred Before ?" {...register("workTransfer")} value="1" onClick={() => { handleShow(); setFileType(9) }}/>
          </Form.Group>

          <Form.Group controlId="lawyer">
            <Form.Check type="checkbox" label="(4) Are you a Lawyer?" {...register("lawyer")} value="1" onClick={() => { handleShow(); setFileType(11) }}/>
          </Form.Group>

          <Form.Group controlId="disableStatus">
            <Form.Check type="checkbox" label="(5) Do you have Any Disability / Sickness ?" {...register("disabledSickness")} value="1" onClick={() => { handleShow(); setFileType(13) }}/>
          </Form.Group>

          <Form.Group controlId="vipAssignment">
            <Form.Check type="checkbox" label="(6) Are you Assign to a VIP ?" {...register("vipAssignment")} value="1" onClick={() => { handleShow(); setFileType(12) }}/>
          </Form.Group>
       </div>

        </div>)}
        <FileUploadManager showActivity={showActivity} fileType={fileType} handleShow={handleShow} fileDoc={fileDoc} deletFile={() => deletFile}/>

    </div>
  )
}

export default CarreerInformation
