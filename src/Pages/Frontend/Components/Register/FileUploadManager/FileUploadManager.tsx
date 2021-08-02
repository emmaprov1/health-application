import { Modal, Button } from "react-bootstrap"
import React from "react"
import { Professional, Lawyer, WorkTransfer, Promotion, Seminar, Service, Ssce, Symposium, Tertiary, Workshop, Conference, VipAssignment, DisabledSickness } from "../FileTypeTemplate"

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
            {fileType === 1 && <Professional deletFile={deletFile}/>}
            {fileType === 2 && <Promotion fileDoc={fileDoc} deletFile={() => deletFile}/>}
            {fileType === 3 && <Seminar fileDoc={fileDoc} deletFile={() => deletFile}/>}
            {fileType === 4 && <Service fileDoc={fileDoc} deletFile={() => deletFile}/>}
            {fileType === 5 && <Ssce fileDoc={fileDoc} deletFile={() => deletFile}/>}
            {fileType === 6 && <Symposium fileDoc={fileDoc} deletFile={() => deletFile}/>}
            {fileType === 7 && <Tertiary fileDoc={fileDoc} deletFile={() => deletFile}/>}
            {fileType === 8 && <Workshop fileDoc={fileDoc} deletFile={() => deletFile}/>}
            {fileType === 9 && <WorkTransfer fileDoc={fileDoc} deletFile={() => deletFile}/>}
            {fileType === 10 && <Conference fileDoc={fileDoc} deletFile={() => deletFile}/>}
            {fileType === 11 && <Lawyer fileDoc={fileDoc} deletFile={() => deletFile}/>}
            {fileType === 12 && <VipAssignment fileDoc={fileDoc} deletFile={() => deletFile}/>}
            {fileType === 13 && <DisabledSickness fileDoc={fileDoc} deletFile={() => deletFile}/>}
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
