import React, { FC, useState } from 'react'
import { DeepMap, FieldError, FieldValues, UseFormRegister } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { UPLOADED_FILES } from '../../../../../Constants/FileConstants'
import { useReference } from '../../../../../Hooks'
import fileService from '../../../../../Services/fileService'
import userService from '../../../../../Services/userService'
import emptyAvarter from "./../../../../../Assets/images/user-empty-avatar.png";
import "./PersonalInformation.scss"

interface personalType {
  changeTab:(value: number) => void;
  register:UseFormRegister<FieldValues>;
  value:any;
  watch:any;
  errors:DeepMap<FieldValues, FieldError>;
  handleChange:(e: any) => void;
}

const initialData = { fileType: "", name: "", remoteURL: "", size: "" }

const PersonalInformation:FC<personalType> = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { surname, jobRole, firstname, middlename, dataOfBirth, phoneNo, phoneNo2, email, email2, gender } = props.value

  const dispatcher = useDispatch()
  const userNin = useReference()
  const { uploadedFiles } = useSelector((state:any) => state)
  const [uploadStatus, setUploadStatus] = useState(false)

  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState<any[]>([])

  let disable = true

  const [uploaded, setUploaded] = useState<any>(initialData)
  const storedFiles: string[] = uploadedFiles

  function checkExistence (type:string) {
    return uploadedFiles.filter(function (element: { fileType: string }) {
      return element.fileType === type;
    }).length
  }

  // simple validation
  if (error.length === 0 && checkExistence("profilePhoto") !== 0 && surname !== "" && jobRole !== "" && firstname !== "" && middlename !== "" && dataOfBirth !== "" && phoneNo !== "" && phoneNo2 !== "" && email !== "" && email2 !== "" && gender) {
    disable = false
  }

  const uploadImage = async (event: { target: { files: any; }; }) => {
    const file = event.target.files
    const fileType = "profilePhoto"
    setUploadStatus(true)
    await fileService.uploadImage(file, fileType, userNin.id).then((res:any) => {
      const resData = {
        remoteURL: res,
        name: file[0].name,
        size: (file[0].size / 1048576).toFixed(2),
        fileType
      }
      setUploaded(resData)
      dispatcher({ type: UPLOADED_FILES, data: [...storedFiles, resData] })
      setUploadStatus(false)
    }, error => {
      console.log(error.message)
    })
  }

  const deletFile = async (data:string) => {
    alert(data)
    await fileService.deleteFile(data).then((res) => {
      return res
    }, error => {
      console.log(error.message)
    })
  }

  const copyFunction = () => {
    const copyref:any = document.getElementById("myInput");
    copyref.select();
    copyref.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the reference id " + copyref.value);
  }

  /**
   * Basic Email validation
   *
   * */

  function checkError (type:string) {
    return error.find(x => x.type === type);
  }

  async function validatePhoneNo (e: { target: { value: any } }) {
    const phoneNos = e.target.value
    console.log("PHONE VALIDATION +++++", email)
    await userService.validatePhone(phoneNos).then((res:{docs:any}) => {
      if (res.docs.length > 0) {
        setError([...error, { type: "phoneNo", message: "Phone number already exist" }])
        disable = true
      } else {
        error.splice(error.findIndex(a => a.type === 'phoneNo'), 1)
        setError(error)
      }
    })
  }

  async function validatePhoneNo2 (e: { target: { value: any } }) {
    const phoneNos2 = e.target.value
    await userService.validatePhone(phoneNos2).then((res:{docs:any}) => {
      if (res.docs.length > 0) {
        setError([...error, { type: "phoneNo2", message: "Phone number already exist" }])
        disable = true
      } else {
        error.splice(error.findIndex(a => a.type === 'phoneNo2'), 1)
        setError(error)
      }
    })
  }

  async function validateEmail (e: { target: { value: any } }) {
    const emails = e.target.value
    await userService.validateEmail(emails).then((res:any) => {
      if (res.docs.length > 0) {
        setError([...error, { type: "email", message: "Email already exist" }])
        disable = true
      } else {
        error.splice(error.findIndex(a => a.type === 'email'), 1)
        setError(error)
      }
    })
  }

  async function validateEmail2 (e: { target: {value: any } }) {
    const emails2 = e.target.value
    await userService.validateEmail(emails2).then((res:any) => {
      if (res.docs.length > 0) {
        setError([...error, { type: "email2", message: "Email already exist" }])
        disable = true
      } else {
        error.splice(error.findIndex(a => a.type === 'email2'), 1)
        setError(error)
      }
    })
  }
  return (
    // personalInfo markup
    <React.Fragment>
      <div className="personalInfo">
        {/* personalInfo title */}
        <div className="personalInfo__titlebar">

        <div className="stepwizard mb-5">
          <div className="stepwizard-row setup-panel">
              <div className="stepwizard-step">
                  <a href="#step-1" type="button" className="btn btn-primary btn-circle">1</a>
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
                  <a href="#step-3" type="button" className="btn btn-default btn-circle">5</a>
                  <p>Step 5</p>
              </div>
          </div>
        </div>
        < h4 className="personalInfo__subtitle">Step 1 : Personal Information</h4>
        </div>

        {/* form - file field - open */}
        <div className="personalInfo__fileField">
          <div className="personalInfo__uploadFile">
            {uploaded.remoteURL && <div className="d-block">
                <small className="mb-5"> photo in png or jpeg formart</small><br></br>
              <img src={uploaded.remoteURL || emptyAvarter} alt="" className="w-50"/>
            </div>}
            <br/>

            {uploaded && emptyAvarter &&
              (uploaded?.fileType === "profilePhoto" && (
                    <span className="fa fa-check fa-1x rounded-circle p-2 bg-success text-right text-white shadow-sm" onChange={() => deletFile(`${uploaded.fileType} /${uploaded.name}`)}></span>
              ))
            }
              {uploadStatus && (
                <div className="spinner-border spinner-border-sm text-success" role="status">
                <span className="sr-only">Loading...</span>
                </div>
              )}

            <label htmlFor="profilePhoto mt-1">
                <input type="file" onChange={uploadImage} name="passport" id="passport" required></input>
            </label>
          </div>

          <p className="personalInfo__labelContainer text-center mt-3">
            <label htmlFor="upload passport">Upload Passport Photograph</label>
          </p>
        </div>
        {/* form - file field - close */}

        {/* form - text fields - open */}
        <div className="personalInfo__textFields row pl-4">
          <div className="form-group col-xl-12 text-center">
            <div className="text-center w-100">Your Reference ID</div>
            <input type="text" onClick={copyFunction} value={userNin.id} readOnly className="w-50 offset-3 text-center form-control" id="myInput"/>
          </div>
        <div className="form-group col-xl-6">
              <label htmlFor="state of origin" className="">
                Job Role
              </label>
              <br />
              <select
                className="form-control"
                id="stateOfOrigin"
                {...props.register("jobRole", {
                  required: 'this is a required field',
                  pattern: {
                    value:
                     /^[a-zA-Z]*$/,
                    message: 'Invalid input',
                  }
                })} onChange={props.handleChange}
              >
              <option value="null">Select a Job Role</option>
              <option value="consultant">Consultant</option>
              <option value="Registrar">Registrar</option>
              <option value="Medical Officer">Medical Officer</option>
            </select>
              <div className="register--error text-danger">
                  {props.errors.jobRole && props.errors.jobRole.message}
              </div>
          </div>

          <div className="form-group col-xl-6">
              <label htmlFor="surname">
                Surname
              </label>
              <br />
              <input
                className="form-control"
                type="text"
                id="surname"
                placeholder="Gakumba"
                {...props.register("surname", {
                  required: 'this is a required field',
                  pattern: {
                    value:
                     /^[a-zA-Z]*$/,
                    message: 'Invalid input',
                  }
                })} value={surname} onChange={props.handleChange}
              />
              <div className="register--error text-danger">
                  {props.errors.surname && props.errors.surname.message}
              </div>
          </div>

          <div className="form-group col-xl-6">
            <label htmlFor="firstname">
              First Name
            </label>
            <input
              className="form-control"
              type="text"
              id="firstname"
              placeholder="Leonard"
              {...props.register("firstname", {
                required: 'this is a required field',
                pattern: {
                  value:
                   /^[a-zA-Z]*$/,
                  message: 'Invalid input',
                }
              })} value={firstname}
               onChange={props.handleChange}
            />
            <div className="register--error text-danger">
                {props.errors.firstname && props.errors.firstname.message}
            </div>
          </div>

            <div className="form-group col-xl-6">
              <label htmlFor="middlename" className="personalInfo__label">
                Middle Name
              </label>
              <br />
              <input
                className="form-control"
                type="text"
                id="middlename"
                placeholder="Farruko"
              {...props.register("middlename", {
                required: 'this is a required field',
                pattern: {
                  value:
                   /^[a-zA-Z]*$/,
                  message: 'Invalid input',
                }
              })} value={middlename} onChange={props.handleChange}
              />
              <div className="register--error text-danger">
                  {props.errors.middlename && props.errors.middlename.message}
              </div>
            </div>

            <div className="form-group col-xl-6">
              <label htmlFor="middlename" className="personalInfo__label">
                Date of birth
              </label>
              <br />
              <input
                className="form-control"
                type="date"
                id="dateofbirth"
                data-date-inline-picker="true"
                placeholder="Farruko"
              {...props.register("dataOfBirth", {
                required: 'this is a required field',
                pattern: {
                  value:
                   /^[a-zA-Z]*$/,
                  message: 'Invalid input',
                }
              })} value={dataOfBirth}
               onChange={props.handleChange}
              />
              <div className="register--error text-danger">
                  {props.errors.dataOfBirth && props.errors.dataOfBirth.message}
              </div>
            </div>

            <div className="form-group col-xl-6">
            <label htmlFor="phone" className="personalInfo__label">
              Phone Number 1
            </label>
            <br />
            <input
              className="form-control"
              type="number"
              id="phoneNo"
              placeholder="(234) 091 234 5678"
              {...props.register("phoneNo", {
                required: 'this is a required field',
                pattern: {
                  value:
                   /^[0-9]*$/,
                  message: 'Invalid input',
                }
              })} value={phoneNo}
              onKeyUp={(e:any) => validatePhoneNo(e)}
               onChange={props.handleChange}
            />
            <div className="register--error text-danger">
                {props.errors.phoneNo && props.errors.phoneNo.message}
                {checkError("phoneNo") && checkError("phoneNo").message}
            </div>
          </div>

          <div className="form-group col-xl-6">
            <label htmlFor="phone" className="personalInfo__label">
              Phone Number 2
            </label>
            <br />
            <input
              className="form-control"
              type="number"
              id="phoneNo2"
              placeholder="(234) 091 234 5678"
              {...props.register("phoneNo2", {
                required: 'this is a required field',
                pattern: {
                  value:
                   /^[0-9]*$/,
                  message: 'Invalid input',
                }
              })} value={phoneNo2}
              onKeyUp={(e:any) => validatePhoneNo2(e)}
               onChange={props.handleChange}
            />
             <div className="register--error text-danger">
                {props.errors.phoneNo2 && props.errors.phoneNo2.message}
                {checkError("phoneNo2") && checkError("phoneNo2").message}
            </div>
          </div>

          <div className="form-group col-xl-6">
            <label htmlFor="email" className="personalInfo__label">
              Email Address 1
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              id="email"
              placeholder="leongakumba@hotmail.com"
              {...props.register("email", {
                required: 'this is a required field',
                pattern: {
                  value:
                   /^[a-zA-Z]*$/,
                  message: 'Invalid input',
                }
              })} value={email}
              onKeyUp={(e:{target:any}) => validateEmail(e)}
               onChange={props.handleChange}
            />
            <div className="register--error text-danger">
               {props.errors.email && props.errors.email.message}
                {checkError("email") && checkError("email").message}
           </div>
          </div>

          <div className="form-group col-xl-6">
            <label htmlFor="email" className="personalInfo__label">
              Email Address 2
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              id="email"
              placeholder="leongakumba@hotmail.com"
              {...props.register("email2", {
                required: 'this is a required field',
                pattern: {
                  value:
                   /^[a-zA-Z]*$/,
                  message: 'Invalid input',
                }
              })} value={email2}
              onKeyUp={(e:{target:any}) => validateEmail2(e)}
               onChange={props.handleChange}
            />
            <div className="register--error text-danger">
               {props.errors.email2 && props.errors.email2.message}
                {checkError("email2") && checkError("email2").message}
           </div>
          </div>

          <div className="form-group  col-xl-6">
            <label htmlFor="gender" className="personalInfo__label">
              Gender
            </label>
            <br />
            <select
              className="form-control"
              id="gender"
              {...props.register("gender", {
                required: 'this is a required field',
                pattern: {
                  value:
                   /^[a-zA-Z]*$/,
                  message: 'Invalid input',
                }
              })}
              onChange={props.handleChange}
            >
              <option value="null">--choose--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <div className="register--error text-danger">
               {props.errors.gender && props.errors.gender.message}
           </div>
          </div>
        </div>
      </div>
      {/* form - text fields - close */}

      {/* back and next buttons */}
      <div className="ctrls pl-4 mt-2">
        <div className="ctrls__next">
          <button type="button" className="ctrls__btn btn btn-dark" onClick={() => props.changeTab(2)} disabled={disable}>Next</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PersonalInformation
