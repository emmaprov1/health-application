import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import fileService from '../../../../../Services/fileService'
import { FileUploadManager } from '../../Index'
import "./EducationInformation.scss"

interface propsType {
    register: any;
    errors: any;
    handleChange: any;
    value: any;
    fileDoc: (data:any) => void
}
const EducationalInformation:FC<propsType> = ({ register, errors, handleChange, value, fileDoc }) => {
  const { uploadedFiles, disableStatus, uploadProgress } = useSelector((state:any) => state)

  const [showActivity, setShowActivity] = useState<boolean>(false)
  const [fileType, setFileType] = useState<number>(0)

  console.log(uploadedFiles)
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
        <div className="EducationalInformation card">
                    <div className="card-header">
                        <div className="c-header-crib-2">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        Education Information
                        <div className="c-header-crib">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

        {!disableStatus &&
                    (<div className="card-body">

                        <div className="container">
                            <div className="form-group form-verify">
                                <label>  Have you attended any Institution </label>
                                  {/* <!-- Rounded switch --> */}
                                  <label className="switch">
                                    <input type="checkbox" {...register("anyInstitution",
                                      { required: ' this is a required field' })}
                                      value={1}
                                     onChange={handleChange}/>
                                    <span className="slider round"></span>
                                  </label>
                            </div>
                            <div className="row">

                                <div className="col-md-4 text-center">
                                 <h5>SSCE</h5>
                                 <div className="uploadBtnContainer" onClick={() => { handleShow(); setFileType(5) }}>
                                     <label className={checkExistence("ssce") > 0 ? "uploadBtnSuccess" : "uploadBtn"}>Upload Certificate</label>
                                  </div>
                                       {uploadProgress.ssce && (
                                    <div className="progress">
                                        <div className={"progress-bar " + (uploadProgress.ssce < 99 ? "bg-danger" : "bg-success")} role="progressbar" style={{ width: uploadProgress.ssce + "%" }} aria-valuenow={uploadProgress.ssce} aria-valuemin={0} aria-valuemax={100}>{uploadProgress.ssce}%</div>
                                    </div>)}
                                    <br />
                                    {/* <!-- Upload Finished --> */}
                                    <div className="eduUploadFinished">
                                        {/* <h4>Upload history</h4> */}
                                        <ul className="list-group">
                                            {uploadedFiles &&
                                            (uploadedFiles.map((items:any, index:any) => {
                                              return items.fileType === "ssce" && (index += index)
                                            }))
                                          }
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-4 text-center">
                                 <h5>Tertiary</h5>
                                 <div className="text-center w-100">
                                 <div className="uploadBtnContainer" onClick={() => { handleShow(); setFileType(7) }}>
                                     <label className={checkExistence("tertiary") > 0 ? "uploadBtnSuccess" : "uploadBtn"}>Upload Certificate</label>
                                  </div>
                                 </div>
                                </div>

                                <div className="col-md-4 text-center">
                                <h5>Professional Certificates</h5>
                                <div className="uploadBtnContainer" onClick={() => { handleShow(); setFileType(1) }}>
                                    <label className={checkExistence("profession") > 0 ? "uploadBtnSuccess" : "uploadBtn"} htmlFor="profession">Upload Certificate</label>
                                </div>

                                </div>

                                <div className="col-md-4 text-center">
                                <h5>Seminar Certificates</h5>
                                <div className="uploadBtnContainer" onClick={() => { handleShow(); setFileType(3) }}>
                                    <label className={checkExistence("seminar") > 0 ? "uploadBtnSuccess" : "uploadBtn"} htmlFor="profession">Upload Certificate</label>
                                </div>

                                </div>

                                <div className="col-md-4 text-center">
                                <h5>Workshop Certificates</h5>
                                <div className="uploadBtnContainer" onClick={() => { handleShow(); setFileType(8) }}>
                                    <label className={checkExistence("workshop") > 0 ? "uploadBtnSuccess" : "uploadBtn"} htmlFor="profession">Upload Certificate</label>
                                </div>

                                </div>

                                <div className="col-md-4 text-center">
                                <h5>Conference Certificates</h5>
                                <div className="uploadBtnContainer" onClick={() => { handleShow(); setFileType(10) }}>
                                    <label className={checkExistence("conference") > 0 ? "uploadBtnSuccess" : "uploadBtn"} htmlFor="profession">Upload certificate</label>
                                </div>

                                </div>

                            </div>

                        </div>
                    </div>
                    )}
                    <FileUploadManager showActivity={showActivity} fileType={fileType} handleShow={handleShow} fileDoc={fileDoc} deletFile={() => deletFile}/>
                </div>
  )
}

export default EducationalInformation
