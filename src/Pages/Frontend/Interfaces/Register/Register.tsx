import React, { useState } from 'react';
import { PersonalInformation, RegisterFooter, RegisterHeader } from '../../Components/Index'
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
      // markup for register
      <React.Fragment>
      <RegisterHeader/>
        <div className="register">
          <div className="register__container">
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
                  <form className="register__formHandler">
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
      <RegisterFooter/>
    </React.Fragment>
  )
}

export default Register
