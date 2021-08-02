import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
// import { useDispatch, useSelector } from 'react-redux'
// import { UPLOADED_FILES } from '../../../../../Constants/FileConstants'
// import { useNin } from '../../../../../Hooks'
import fileService from '../../../../../Services/fileService'
import { FileUploadManager } from '../../Index'
import "./EducationInformation.scss"

interface propsType {
    register: any;
    errors: any;
    handleChange: any;
    value: any
}
const EducationalInformation:FC<propsType> = ({ register, errors, handleChange, value }) => {
  const { uploadedFiles, disableStatus, uploadProgress } = useSelector((state:any) => state)

  const [showActivity, setShowActivity] = useState<boolean>(false)
  const [fileType, setFileType] = useState<number>(0)

  // const storedFiles: string[] = uploadedFiles
  // const dispatcher = useDispatch()
  // const userNin = useNin()
  console.log(uploadedFiles)

  const handleShow = () => setShowActivity(!showActivity);

  // const scondarySchool = async (event: any) => {
  //   console.log("uploading")
  //   const file = event.target.files
  //   const fileType = "secondarySchoolCertificate"
  //   await fileService.uploadImage(file, fileType, dispatcher, userNin.nin).then((res:any) => {
  //     setUploaded([...uploaded, res])
  //     dispatcher({ type: UPLOADED_FILES, data: [...storedFiles, res] })
  //     console.log(res)
  //   }, error => {
  //     console.log(error.message)
  //   })
  // }

  console.log(uploadedFiles)

  // const professionalInstitution = async (event: any) => {
  //   console.log("uploading")
  //   const file = event.target.files
  //   const fileType = "professionalInstitution"
  //   await fileService.uploadImage(file, fileType, dispatcher, userNin.nin).then((res:any) => {
  //     setUploaded([...uploaded, res])
  //     dispatcher({ type: UPLOADED_FILES, data: [...storedFiles, res] })
  //   }, error => {
  //     console.log(error.message)
  //   })
  // }

  // const tertiaryInstitution = async (event: any) => {
  //   console.log("uploading")
  //   const file = event.target.files
  //   const fileType = "tertiaryInstitution"
  //   await fileService.uploadImage(file, fileType, dispatcher, userNin.nin).then((res:any) => {
  //     setUploaded([...uploaded, res])
  //     dispatcher({ type: UPLOADED_FILES, data: [...storedFiles, res] })
  //   }, error => {
  //     console.log(error.message)
  //   })
  // }

  const fileDoc = (data:any) => {
    alert(2)
    console.log(data)
  }

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

        {disableStatus &&
                    (<div className="card-body">

                        <div className="container">
                            <div className="form-group form-verify">
                                <label>  Have you attended any Institution </label>
                                  {/* <!-- Rounded switch --> */}
                                  <label className="switch">
                                    <input type="checkbox"/>
                                    <span className="slider round"></span>
                                  </label>
                            </div>
                            <div className="row">
                                <div className="col-md-4 text-center">
                                 <h5>SSCE</h5>
                                 <div className="uploadBtnContainer" onClick={() => { handleShow(); setFileType(5) }}>
                                     <label className="uploadBtn">Upload file</label>
                                     {/* <input name="tertiaryInstitution" type="file" id="tertiaryInstitution" hidden onChange={tertiaryInstitution}></input> */}
                                 </div>
                                     {/* <label className="uploadBtn" htmlFor="scondarySchool">Upload file</label>
                                     <input type="file" id="scondarySchool" hidden onChange={scondarySchool}></input> */}
                                  {/* <!-- Progress Bar --> */}
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
                                              return items.fileType === "ssce" && (
                                              <li key={index} className="list-group-item list-group-item-success mb-1 rounded">
                                                <a href={items.remoteURL} target="_blank" rel="noreferrer">
                                                <span className="badge alert-success pull-right">{items.size}mb</span>{items.name}
                                                </a>
                                                <span className="d-icon d-trash is-small bg-danger text-right text-white shadow-sm" onChange={() => deletFile(`${items.fileType} /${items.name}`)}></span>
                                              </li>)
                                            }))
                                          }
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-4 text-center">
                                 <h5>Tertiary</h5>
                                 <div className="text-center w-100">
                                 <div className="uploadBtnContainer" onClick={() => { handleShow(); setFileType(7) }}>
                                     <label className="uploadBtn">Upload file</label>
                                     {/* <input name="tertiaryInstitution" type="file" id="tertiaryInstitution" hidden onChange={tertiaryInstitution}></input> */}
                                 </div>
                                       {/* <!-- Progress Bar --> */}
                                       {uploadProgress.tertiaryInstitution && (
                                       <div className="progress">
                                        <div className={"progress-bar " + (uploadProgress.tertiaryInstitution < 99 ? "bg-danger" : "bg-success")} role="progressbar" style={{ width: uploadProgress.tertiaryInstitution + "%" }}
                                            aria-valuenow={uploadProgress.tertiaryInstitution}
                                            aria-valuemin={0} aria-valuemax={100}>{uploadProgress.tertiaryInstitution}%</div>
                                    </div>)}
                                    <br />
                                    {/* <!-- Upload Finished --> */}
                                    <div className="eduUploadFinished">
                                        {/* <h4>Upload history</h4> */}

                                    </div>
                                 </div>
                                </div>

                                <div className="col-md-4 text-center">
                                <h5>Professional Certificates</h5>
                                 <div className="uploadBtnContainer" onClick={() => { handleShow(); setFileType(1) }}>
                                     <label className="uploadBtn" htmlFor="professionalInstitution">Upload file</label>
                                     {/* <input name="" type="file" id="professionalInstitution" hidden onChange={professionalInstitution}></input> */}
                                 </div>
                                   {/* <!-- Progress Bar --> */}
                                       {uploadProgress.professionalInstitution && (
                                    <div className="progress">
                                        <div className={"progress-bar " + (uploadProgress.professionalInstitution < 99 ? "bg-danger" : "bg-success")} role="progressbar" style={{ width: uploadProgress.professionalInstitution + "%" }} aria-valuenow={uploadProgress.professionalInstitution} aria-valuemin={0} aria-valuemax={100}>{uploadProgress.professionalInstitution}%</div>
                                    </div>)}
                                    <br />
                                    {/* <!-- Upload Finished --> */}
                                    <div className="eduUploadFinished">
                                        {/* <h4>Upload history</h4> */}
                                        <ul className="list-group">
                                        {uploadedFiles &&
                                            (uploadedFiles.map((items:any, index:any) => {
                                              return items.fileType === "professionalInstitution" && (
                                                <li key={index} className="list-group-item list-group-item-success mb-1 rounded">
                                                    <a href={items.remoteURL} target="_blank" rel="noreferrer">
                                                    <span className="badge alert-success pull-right">{items.size}mb</span>{items.name}
                                                    </a>
                                                    <span className="d-icon d-trash is-small bg-danger text-right text-white shadow-sm" onChange={() => deletFile(items.fileType + "/" + items.name)}></span>
                                                </li>
                                              )
                                            }))
                                        }
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="form-group form-verify">
                                <label> Name of Institution: </label>
                                <input type="text" name="" className="form-control rounded-0"/>
                            </div>
                            <div className="form-group form-verify">
                                <label> Number of Years Serve </label>
                                <input type="text" name="" className="form-control rounded-0"/>
                            </div> */}

                        </div>
                    </div>
                    )}
                    <FileUploadManager showActivity={showActivity} fileType={fileType} handleShow={handleShow} fileDoc={fileDoc} deletFile={() => deletFile}/>
                </div>
  )
}

export default EducationalInformation
