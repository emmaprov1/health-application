import React, { useEffect, useState } from 'react';
import { PersonalInformation, RegisterFooter, RegisterHeader } from '../../Components/Index'
import AddressInformation from '../../Components/Register/AddressInformation/AddressInformation';
import CredentialsInformation from '../../Components/Register/CredentialsInformation/CredentialsInformation';
import JobApplication from '../../Components/Register/JobApplication/JobApplication';
import MoreCredentials from '../../Components/Register/MoreCredentials/MoreCredentials';
import { useForm } from "react-hook-form";
import { Loader } from "../../../../Components"
import { Toaster, toast } from 'react-hot-toast';
import './Register.scss'
import { useSelector } from 'react-redux';
import userService from '../../../../Services/userService';
import { useReference } from '../../../../Hooks';
import MD5 from 'crypto-js/md5';
import { ErrorMessage } from '@hookform/error-message';

const initialState = {
  surname: "",
  jobRole: "",
  firstname: "",
  middlename: "",
  dataOfBirth: "",
  phoneNo: "",
  phoneNo2: "",
  email: "",
  email2: "",
  gender: "",
  stateOfOrigin: "",
  addressOfOrigin: "",
  stateOfResidence: "",
  addressOfResidence: "",
  lgaOfResidence: "",
  acknwoledgement: false,
  referenceID: "",
  profilePhoto: ""
};

const Register = () => {
  const [currentTab, setCurrentTab] = useState<number>(1)

  const { uploadedFiles } = useSelector((state:any) => state)

  const userNin = useReference()

  const [fields, updateFields] = useState<any>({ ...initialState, data: uploadedFiles })
  const [success, setSuccess] = useState(false)
  const [submited, setSubmited] = useState(true)
  const [loader, setLoader] = useState(false)

  const changeTab = (value:number) => {
    setCurrentTab(value)
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;

    updateFields({
      ...fields,
      [name]: value,
    })
  }

  const fileDoc = (data: { fileType: string | number; }) => {
    const dataSource = fields[data?.fileType]

    updateFields({
      ...fields,
      [data?.fileType]: [...dataSource, data],
    })
  }
  const onSubmit = handleSubmit((data) => completeForm());

  const completeForm = async () => {
    updateFields({
      ...fields,
      data: [...uploadedFiles],
      referenceID: userNin.id
    })

    setLoader(true)
    setSubmited(!submited) // ninData

    const hashRef = MD5(userNin.id).toString();

    await userService.saveRegistrationData(hashRef, fields).then(
      () => {
        setLoader(false)
        setSubmited(!submited)
        setSuccess(!success)
        toast.success('Application submitted successfully', { duration: 20000, className: 'bg-success text-white' });
        setTimeout(() => {
          window.location.href = `/#/slip/${hashRef}`
        }, 4000)
      }, error => {
        setLoader(false)
        setSubmited(!submited)
        console.log(error.message)
        toast.error(error.message, { duration: 20000, className: 'bg-danger text-white' });
      }
    )
  }

  useEffect(() => {
    console.log(fields)
  }, [
    fields])

  useEffect(() => {
    updateFields({
      ...fields,
      data: [...uploadedFiles],
      referenceID: userNin.id
    })
  }, [
    uploadedFiles])

  return (
      // markup for register
      <React.Fragment>
      <RegisterHeader/>
        <div className="register">
          <div className="register__container pt-5">
            <div className="row">
              {/* register help column */}
              <div className="register__help col-lg-4">
                <h4 className="register__helpTitle">Registration Instructions</h4>
                <p className="mt-4 text-muted">Follow the specified instructions to get a very detailed and thorough understanding on how to start and complete your application</p>
                <div className="register__instructions">
                  <li>Instruction 1: Your Personal Information</li>
                  <li>Instruction 2: Your Address Information</li>
                  <li>Instruction 3: Your Credentials Information</li>
                  <li>Instruction 4: More of your Credentials Info</li>
                  <li>Instruction 5: Write an Application Letter</li>
                  <li>Instruction 6: Print confirmation slip</li>
                </div>
              </div>
              {/* register form column */}
              <div className="register__formWrap col-lg-8">
                <div className="register__formCard p-2 p-lg-5 mt-1">
                  {/* <div className="alert alert-danger">
                    {errors}
                  </div> */}
                  <ErrorMessage
                      errors={errors}
                      name="singleErrorInput"
                      render={({ message }) => <p>{message}</p>}
                    />

                  <form className="register__formHandler" onSubmit={onSubmit}>
                    {currentTab === 1 && (<PersonalInformation
                                            changeTab={changeTab}
                                            register={register}
                                            errors={errors}
                                            watch={watch}
                                            handleChange={handleChange}
                                            value={fields}/>)}

                    {currentTab === 2 && (<AddressInformation
                                          changeTab={changeTab}
                                          register={register}
                                          errors={errors}
                                          handleChange={handleChange}
                                          value={fields}/>)}

                    {currentTab === 3 && (<CredentialsInformation
                                            changeTab={changeTab}
                                            register={register}
                                            errors={errors}
                                            handleChange={handleChange}
                                            value={fields}
                                            fileDoc={fileDoc}/>)}

                    {currentTab === 4 && (<MoreCredentials
                                            changeTab={changeTab}
                                            register={register}
                                            errors={errors}
                                            handleChange={handleChange}
                                            value={fields}
                                            fileDoc={fileDoc}/>)}
                    {currentTab === 5 && (<JobApplication
                                            changeTab={changeTab}
                                            register={register}
                                            errors={errors}
                                            handleChange={handleChange}
                                            value={fields}
                                            completeForm = {() => completeForm()}
                                            submited={submited}
                                          />)}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      <RegisterFooter/>
          <Toaster/>
          <Loader show={loader}/>
    </React.Fragment>
  )
}

export default Register
