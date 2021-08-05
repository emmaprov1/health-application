import React, { FC, useState } from 'react'
import { DeepMap, FieldError, FieldValues, UseFormRegister } from 'react-hook-form'
import { useSelector } from 'react-redux'
import fileService from '../../../../../Services/fileService'
import FileUploadManager from '../FileUploadManager/FileUploadManager'
import "./MoreCredentials.scss"

interface MoreCredentialsType {
  changeTab:(value: number) => void;
  register:UseFormRegister<FieldValues>;
  value:any;
  errors:DeepMap<FieldValues, FieldError>;
  handleChange:(e: any) => void;
  fileDoc:(data:any) => void
}

const MoreCredentials:FC<MoreCredentialsType> = (props) => {
  const { uploadedFiles, uploadProgress } = useSelector((state:any) => state)

  const [showActivity, setShowActivity] = useState<boolean>(false)
  // eslint-disable-next-line no-unused-vars
  const [fileType, setFileType] = useState<number>(0)

  console.log(uploadedFiles)
  // eslint-disable-next-line no-unused-vars
  function checkExistence (type:string) {
    return uploadedFiles.filter(function (element: { fileType: string }) {
      return element.fileType === type;
    }).length
  }

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
    <React.Fragment>
      {/* moreCredentials markup */}
      <div className="moreCredentials">
        {/* moreCredentials title */}
        <div className="moreCredentials__titlebar">
        <div className="stepwizard mb-5">
          <div className="stepwizard-row setup-panel">
              <div className="stepwizard-step">
                  <a href="#step-1" type="button" className="btn btn-default btn-circle">1</a>
                  <p>Step 1</p>
              </div>
              <div className="stepwizard-step">
                  <a href="#step-2" type="button" className="btn btn-default btn-circle">2</a>
                  <p>Step 2</p>
              </div>
              <div className="stepwizard-step">
                  <a href="#step-3" type="button" className="btn btn-default btn-circle">3</a>
                  <p>Step 3</p>
              </div>
              <div className="stepwizard-step">
                  <a href="#step-3" type="button" className="btn btn-primary btn-circle">4</a>
                  <p>Step 4</p>
              </div>
              <div className="stepwizard-step">
                  <a href="#step-3" type="button" className="btn btn-default btn-circle">5</a>
                  <p>Step 5</p>
              </div>
          </div>
        </div>
          <h4 className="moreCredentials__subtitle">Step 4 : More Credentials</h4>
        </div>
      </div>

      {/* form - file fields - open */}
      <div className="moreCredentials__fileFields row pl-4 pr-4">
      <div className="moreCredentials__fileField col-xl-6">
          <div className="moreCredentials__uploadFile">
            <button
              id="uploadbtn"
              className="w-50 btn border rounded-0 shadow"
              onClick={() => { handleShow(); setFileType(5) }}
            >Choose file</button>
          </div>
          <p className="moreCredentials__labelContainer text-center mt-3">
            <label htmlFor="upload passport">Upload LGA Certificate</label>
          </p>
          {uploadProgress.licenseCertifcate && (
              <div className="progress">
                  <div className={"progress-bar " + (uploadProgress.licenseCertifcate < 99 ? "bg-danger" : "bg-success")} role="progressbar" style={{ width: uploadProgress.licenseCertifcate + "%" }} aria-valuenow={uploadProgress.licenseCertifcate} aria-valuemin={0} aria-valuemax={100}>{uploadProgress.licenseCertifcate}%</div>
              </div>)}
              <ul className="list-group">
                  {uploadedFiles &&
                  (uploadedFiles.map((items:any, index:any) => {
                    return items.fileType === "licenseCertifcate" && (index += index)
                  }))
                }
              </ul>
        </div>

        <div className="moreCredentials__fileField col-xl-6">
          <div className="moreCredentials__uploadFile">
          <button
              id="uploadbtn"
              className="w-50 btn border rounded-0 shadow"
              onClick={() => { handleShow(); setFileType(6) }}
            >Choose file</button>
          </div>
          <p className="moreCredentials__labelContainer text-center mt-3">
            <label htmlFor="upload passport">Upload Government Issued ID</label>
          </p>
          {uploadProgress.identity && (
              <div className="progress">
                  <div className={"progress-bar " + (uploadProgress.identity < 99 ? "bg-danger" : "bg-success")} role="progressbar" style={{ width: uploadProgress.identity + "%" }} aria-valuenow={uploadProgress.identity} aria-valuemin={0} aria-valuemax={100}>{uploadProgress.identity}%</div>
              </div>)}
              <ul className="list-group">
                  {uploadedFiles &&
                  (uploadedFiles.map((items:any, index:any) => {
                    return items.fileType === "identity" && (index += index)
                  }))
                }
              </ul>
        </div>
      </div>

      {/* back and next buttons */}
      <div className="ctrls pl-4 pr-4 mt-2">
        <div className="ctrls__back">
          <button type="button" className="ctrls__btn btn btn-secondary" onClick={() => props.changeTab(3)}>Back : Credentials Information</button>
        </div>

        <div className="ctrls__next ml-5">
          <button type="button" className="ctrls__btn btn btn-dark" onClick={() => props.changeTab(5)}>Next : Job Role Application</button>
        </div>
      </div>
      <FileUploadManager showActivity={showActivity} fileType={fileType} handleShow={handleShow} fileDoc={props.fileDoc} deletFile={() => deletFile}/>

    </React.Fragment>
  )
}

export default MoreCredentials
