import React, { useState } from 'react'
import { PersonalInformation, RegisterHeader } from '../../Components/Index'
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
                <div className="signup card shadow p-4 mt-5">
                  <form className="signup__formHandler">
                    {currentTab === 1 && (<PersonalInformation changeTab={changeTab}/>)}
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
