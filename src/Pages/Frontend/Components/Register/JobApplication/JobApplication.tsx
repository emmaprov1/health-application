import React, { FC, useState } from 'react'
import { DeepMap, FieldError, FieldValues, UseFormRegister } from 'react-hook-form'
import { useSelector } from 'react-redux'
import fileService from '../../../../../Services/fileService'
import FileUploadManager from '../FileUploadManager/FileUploadManager'
import "./JobApplication.scss"

interface JobApplicationType {
  changeTab:(value: number) => void;
  register:UseFormRegister<FieldValues>;
  value:any;
  errors:DeepMap<FieldValues, FieldError>;
  handleChange:(e: any) => void;
  completeForm:()=>void;
  submited: boolean;
  fileDoc:(data:any) => void
}

const JobApplication:FC<JobApplicationType> = (props) => {
  const { coverLetter, acknwoledgement } = props.value

  // eslint-disable-next-line no-unused-vars
  const { uploadedFiles, uploadProgress, workExperienceReducer } = useSelector((state:any) => state)

  let disable = true
  // simple validation
  if (coverLetter === '' && acknwoledgement === false && workExperienceReducer.WorkExperience.length > 0) {
    disable = false
  }

  console.log(uploadedFiles)
  // eslint-disable-next-line no-unused-vars
  function checkExistence (type:string) {
    return uploadedFiles.filter(function (element: { fileType: string }) {
      return element.fileType === type;
    }).length
  }

  const [showActivity, setShowActivity] = useState<boolean>(false)
  // eslint-disable-next-line no-unused-vars
  const [fileType, setFileType] = useState<number>(0)
  const handleShow = () => setShowActivity(!showActivity);

  const deletFile = async (data:string) => {
    alert(data)
    await fileService.deleteFile(data).then((res) => {
      return res
    }, error => {
      console.log(error.message)
    })
  }

  return (
    // jobApplication markup
    <React.Fragment>
      <div className="jobApplication">
        {/* jobApplication title */}
        <div className="jobApplication__titlebar">
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
                  <a href="#step-3" type="button" className="btn btn-default btn-circle">4</a>
                  <p>Step 4</p>
              </div>
              <div className="stepwizard-step">
                  <a href="#step-3" type="button" className="btn btn-primary btn-circle">5</a>
                  <p>Step 5</p>
              </div>
          </div>
        </div>
          <h4 className="jobApplication__subtitle">Step 5 : Job Role Application</h4>
        </div>

{/* form - text fields - open */}
<div className="jobApplication__textFields row pl-4">
  <div className="form-group col-xl-12">
    <label htmlFor="state of origin" className="">
      Write a cover letter <span className="text-danger">*</span>
    </label>
    <br />
    <textarea
        className="form-control letterBox"
        id="stateOfOrigin"
        placeholder="e.g Hello! My name is..."
        {...props.register("coverLetter", {
          required: 'this is a required field',
          pattern: {
            value:
            /^[a-zA-Z\s]*$/,
            message: 'Invalid input',
          }
        })} value={coverLetter} onChange={props.handleChange}
      ></textarea>
      <div className="register--error text-danger">
          {props.errors.coverLetter && props.errors.coverLetter.message}
      </div>
    </div>
</div>

  {/* form - text fields - open */}
  <div className="jobApplication__textFields row pl-4">
    <div className="form-group col-xl-12">
      <div className="form-group">
        <label htmlFor="state of origin" className="">
          Your Work Experience <span className="text-danger">*</span>
        </label>
        <br />
        <input onClick={() => { handleShow(); setFileType(9) }}></input>

        {workExperienceReducer.WorkExperience.length > 0 ? <span className="fa fa-check text-light bg-success p-1 rounded-circle"></span> : <span className="fa fa-times text-light bg-danger p-1 rounded-circle"></span>}

      </div>

        <div className="register--error text-danger">
            {props.errors.coverLetter && props.errors.coverLetter.message}
        </div>
      </div>
  </div>

        <div className="jobApplication__textFields row pl-4">
          <div className="form-group col-xl-12">

            <br />
            <input
             type="checkbox"
             {...props.register("acknwoledgement", {
               required: 'Please tick the checkbox',
             })} value={'true'} required={true} onChange={props.handleChange}
              />
              <label htmlFor="state of origin" className="">
            I accept and acknwoledge that information provided are true to the best of my knowledge.
            </label>
              <div className="register--error text-danger">
                  {props.errors.coverLetter && props.errors.coverLetter.message}
              </div>
            </div>
        </div>
      </div>
      {/* form - text fields - open */}

      {/* back and next buttons */}
      <div className="ctrls pl-4 pr-4 mt-2">
        <div className="ctrls__back">
          <button type="button" className=" btn btn-dark rounded" onClick={() => props.changeTab(4)}>Back : More Credentials</button>
        </div>

        <div className="ctrls__next ml-5">
        <button className="btn btn-dark btn-md" type="submit" disabled={!disable}>Submit</button>
        {/* {props.submited && <button className="btn btn-dark btn-md" onClick={props.completeForm}>Submit</button>} */}

          {/* {!props.submited && <button className="btn btn-dark btn-md" disabled onClick={props.completeForm}>Submiting please wait
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div></button>} */}
          </div>
      </div>
      <FileUploadManager showActivity={showActivity} fileType={fileType} handleShow={handleShow} fileDoc={props.fileDoc} deletFile={() => deletFile}/>

    </React.Fragment>
  )
}

export default JobApplication
