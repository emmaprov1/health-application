import { Modal, Button } from "react-bootstrap"
import React from "react"
import {
  Citizenship,
  Identity,
  LicenseCertificate,
  Nysc,
  Ssce,
  Tertiary,
  //  Symposium, Tertiary, Workshop, Conference, VipAssignment, DisabledSickness
} from "../FileTypeTemplate"
import Certificate from "../FileTypeTemplate/Certificate"

interface propsTypes {
    showActivity: boolean;
    fileType: number;
    handleShow: ()=>void;
    fileDoc: (data:any) =>void;
    deletFile: () =>void
}
const FileUploadManager = ({ showActivity, fileType, handleShow, fileDoc, deletFile }: propsTypes) => {
  console.log(fileType)

  return (
    <div>

     <Modal show={showActivity}
      onHide={handleShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Body>
            {fileType === 1 && <Ssce fileDoc={fileDoc} deletFile={() => deletFile}/>}
            {fileType === 2 && <Tertiary fileDoc={fileDoc} deletFile={() => deletFile}/>}
            {fileType === 3 && <LicenseCertificate fileDoc={fileDoc} deletFile={() => deletFile}/>}
            {fileType === 4 && <Certificate fileDoc={fileDoc} deletFile={() => deletFile}/>}
            {fileType === 5 && <Citizenship fileDoc={fileDoc} deletFile={() => deletFile}/>}
            {fileType === 6 && <Identity fileDoc={fileDoc} deletFile={() => deletFile}/>}
            {fileType === 7 && <Nysc fileDoc={fileDoc} deletFile={() => deletFile}/>}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default FileUploadManager
