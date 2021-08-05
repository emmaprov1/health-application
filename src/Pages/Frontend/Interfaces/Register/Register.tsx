import React, { useState } from 'react';
import { PersonalInformation, RegisterFooter, RegisterHeader } from '../../Components/Index'
import AddressInformation from '../../Components/Register/AddressInformation/AddressInformation';
import CredentialsInformation from '../../Components/Register/CredentialsInformation/CredentialsInformation';
import JobApplication from '../../Components/Register/JobApplication/JobApplication';
import MoreCredentials from '../../Components/Register/MoreCredentials/MoreCredentials';
import { useForm } from "react-hook-form";

import './Register.scss'
import { useSelector } from 'react-redux';

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
  addressOfRecidence: "",
  lgaOfResidence: "",
  dateOfBirth: "",
  acknwoledgement: false,
};

const Register = () => {
  const [currentTab, setCurrentTab] = useState<number>(1)

  const { uploadedFiles } = useSelector((state:any) => state)

  const [fields, updateFields] = useState<any>({ ...initialState, data: uploadedFiles })
  // const [success, setSuccess] = useState(false)
  // const [submited, setSubmited] = useState(false)
  // const [loader, setLoader] = useState(false)

  const changeTab = (value:number) => {
    setCurrentTab(value)
  }

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;

    console.log({
      [name]: value,
    })
    console.log(fields)

    updateFields({
      ...fields,
      [name]: value,
    })
  }
  console.log("All field", fields)
  const fileDoc = (data: { fileType: string | number; }) => {
    const dataSource = fields[data?.fileType]

    console.log(dataSource)

    updateFields({
      ...fields,
      [data?.fileType]: [...dataSource, data],
    })
  }
  const onSubmit = handleSubmit((data) => processData(data));

  const processData = (data: { [x: string]: any; }) => {
    console.log(data)
  }

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
                  <li>Instruction 6: Select a Job Category Role</li>
                  <li>Instruction 5: Submit and Finish Registration</li>
                </div>
              </div>
              {/* register form column */}
              <div className="register__formWrap col-lg-8">
                <div className="register__formCard p-2 p-lg-5 mt-1">
                  <form className="register__formHandler" onSubmit={onSubmit}>
                    {currentTab === 1 && (<PersonalInformation
                                            changeTab={changeTab}
                                            register={register}
                                            errors={errors}
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
                                          />)}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      <RegisterFooter/>
    </React.Fragment>
  )
}

export default Register
