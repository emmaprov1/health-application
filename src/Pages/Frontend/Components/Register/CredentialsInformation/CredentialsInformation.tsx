import React, { FC, useState } from 'react'
import { DeepMap, FieldError, FieldValues, UseFormRegister } from 'react-hook-form'
import { useSelector } from 'react-redux'
import fileService from '../../../../../Services/fileService'
import FileUploadManager from '../FileUploadManager/FileUploadManager'
import "./CredentialsInformation.scss"

interface CredentialsInformationType {
  changeTab:(value: number) => void;
  register:UseFormRegister<FieldValues>;
  value:any;
  errors:DeepMap<FieldValues, FieldError>;
  handleChange:(e: any) => void;
  fileDoc:(data:any) => void
}

const CredentialsInformation:FC<CredentialsInformationType> = (props) => {
  const { uploadedFiles, uploadProgress } = useSelector((state:any) => state)

  const [showActivity, setShowActivity] = useState<boolean>(false)
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

  console.log("UPLOADS", uploadedFiles)
  return (
    // credentialsInfo markup
    <React.Fragment>
    <div className="credentialsInfo">
      {/* credentialsInfo title */}
      <div className="credentialsInfo__titlebar">
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
                  <a href="#step-3" type="button" className="btn btn-primary btn-circle">3</a>
                  <p>Step 3</p>
              </div>
              <div className="stepwizard-step">
                  <a href="#step-3" type="button" className="btn btn-default btn-circle">4</a>
                  <p>Step 4</p>
              </div>
              <div className="stepwizard-step">
                  <a href="#step-3" type="button" className="btn btn-default btn-circle">5</a>
                  <p>Step 5</p>
              </div>
          </div>
        </div>
        <h4 className="credentialsInfo__subtitle">Step 3 : Credentials Information</h4>
      </div>

      {/* form - text fields - open */}
      <div className="credentialsInfo__fileFields row pl-4 pr-4">
        <div className="credentialsInfo__fileField col-xl-6">
            <div className={checkExistence('ssce') <= 0 ? "credentialsInfo__uploadFile" : "credentialsInfo__uploadFile2"}>
              <input
                type="file"
                name="sscert"
                id="sscert"
                readOnly
                onClick={() => { handleShow(); setFileType(1) }}
              />
            </div>
            <p className="credentialsInfo__labelContainer text-center mt-3">
              <label htmlFor="upload passport">Upload SSC Certificate</label>
            </p>
            {uploadProgress.ssce && (
              <div className="progress">
                  <div className={"progress-bar " + (uploadProgress.ssce < 99 ? "bg-danger" : "bg-success")} role="progressbar" style={{ width: uploadProgress.ssce + "%" }} aria-valuenow={uploadProgress.ssce} aria-valuemin={0} aria-valuemax={100}>{uploadProgress.ssce}%</div>
              </div>)}
              <ul className="list-group">
                  {uploadedFiles &&
                  (uploadedFiles.map((items:any, index:any) => {
                    return items.fileType === "ssce" && (index += index)
                  }))
                }
              </ul>
          </div>

          <div className="credentialsInfo__fileField col-xl-6">
          <div className={checkExistence('tertiary') <= 0 ? "credentialsInfo__uploadFile" : "credentialsInfo__uploadFile2"}>
               <input
                type="file"
                name="sscert"
                id="sscert"
                onClick={() => { handleShow(); setFileType(2) }}
              />
            </div>
            <p className="credentialsInfo__labelContainer text-center mt-3">
              <label htmlFor="upload passport">Upload BSC/HND Certificate</label>
            </p>
            {uploadProgress.tertiary && (
              <div className="progress">
                  <div className={"progress-bar " + (uploadProgress.tertiary < 99 ? "bg-danger" : "bg-success")} role="progressbar" style={{ width: uploadProgress.tertiary + "%" }} aria-valuenow={uploadProgress.tertiary} aria-valuemin={0} aria-valuemax={100}>{uploadProgress.tertiary}%</div>
              </div>)}
              <ul className="list-group">
                  {uploadedFiles &&
                  (uploadedFiles.map((items:any, index:any) => {
                    return items.fileType === "tertiary" && (index += index)
                  }))
                }
              </ul>
          </div>

          <div className="credentialsInfo__fileField col-xl-6">
          <div className={checkExistence('licenseCertifcate') <= 0 ? "credentialsInfo__uploadFile" : "credentialsInfo__uploadFile2"}>
               <input
                type="file"
                name="sscert"
                id="sscert"
                onClick={() => { handleShow(); setFileType(3) }}
              />
            </div>
            <p className="credentialsInfo__labelContainer text-center mt-3">
              <label htmlFor="upload passport">Upload Operating License Certificate</label>
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

          <div className="credentialsInfo__fileField col-xl-6">
          <div className={checkExistence('certificate') <= 0 ? "credentialsInfo__uploadFile" : "credentialsInfo__uploadFile2"}>
               <input
                type="file"
                name="sscert"
                id="sscert"
                onClick={() => { handleShow(); setFileType(4) }}
              />
            </div>
            <p className="credentialsInfo__labelContainer text-center mt-3">
              <label htmlFor="upload passport">Upload Other Professional Certificates</label>
            </p>
            {uploadProgress.certificate && (
              <div className="progress">
                  <div className={"progress-bar " + (uploadProgress.certificate < 99 ? "bg-danger" : "bg-success")} role="progressbar" style={{ width: uploadProgress.certificate + "%" }} aria-valuenow={uploadProgress.certificate} aria-valuemin={0} aria-valuemax={100}>{uploadProgress.certificate}%</div>
              </div>)}
              <ul className="list-group">
                  {uploadedFiles &&
                  (uploadedFiles.map((items:any, index:any) => {
                    return items.fileType === "certificate" && (index += index)
                  }))
                }
              </ul>

          </div>
        </div>
      </div>

      {/* back and next buttons */}
      <div className="ctrls pl-4 pr-4 mt-2">
        <div className="ctrls__back">
          <button type="button" className="ctrls__btn btn btn-secondary" onClick={() => props.changeTab(2)}>Back : Address Information</button>
        </div>

        <div className="ctrls__next ml-5">
          <button type="button" className="ctrls__btn btn btn-dark" onClick={() => props.changeTab(4)}>Next : More Credentials</button>
        </div>
      </div>
      <FileUploadManager showActivity={showActivity} fileType={fileType} handleShow={handleShow} fileDoc={props.fileDoc} deletFile={() => deletFile}/>
    </React.Fragment>
  )
}

export default CredentialsInformation
