import React, { useState } from 'react';
import { PersonalInformation, RegisterHeader } from '../../Components/Index'
import AddressInformation from '../../Components/Register/AddressInformation/AddressInformation';
import CredentialsInformation from '../../Components/Register/CredentialsInformation/CredentialsInformation';
import JobApplication from '../../Components/Register/JobApplication/JobApplication';
import MoreCredentials from '../../Components/Register/MoreCredentials/MoreCredentials';
import './Register.scss'

const Register = () => {
  const [currentTab, setCurrentTab] = useState<number>(1)

  const changeTab = (value:number) => {
    setCurrentTab(value)
  }
  return (
    <div className="register">
     <RegisterHeader/>
      <div className="container">
        <div className="form-content">
          <div className="row">
            <div className="col-md-4 instructions h-100 my-auto">
                <h4>Instructions</h4>
                <p className="summary mt-3">
                  Follow these instructions to complete your registration
                </p>
                <ol className="instructionList">
                  <li>Instruction 1</li>
                  <li>Instruction 2</li>
                  <li>Instruction 3</li>
                  <li>Instruction 4</li>
                  <li>Instruction 5</li>
                </ol>
            </div>

              <div className="col-md-8">
                <div className="signup card shadow p-4 mt-3">
                  <form className="signup__formHandler">
                    {currentTab === 1 && (<PersonalInformation changeTab={changeTab}/>)}
                    {currentTab === 2 && (<AddressInformation changeTab={changeTab}/>)}
                    {currentTab === 3 && (<CredentialsInformation changeTab={changeTab}/>)}
                    {currentTab === 4 && (<MoreCredentials changeTab={changeTab}/>)}
                    {currentTab === 5 && (<JobApplication changeTab={changeTab}/>)}
                  </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
