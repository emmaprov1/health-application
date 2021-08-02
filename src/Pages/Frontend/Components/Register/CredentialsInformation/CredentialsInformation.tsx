import React, { FC } from 'react'
import "./CredentialsInformation.scss"

interface personaldata {
  changeTab:any
}

const CredentialsInformation:FC<personaldata> = (props) => {
  return (
    <React.Fragment>
    <div className="credentialsInfo">
    <div className="credentialsInfo__titlebar">

<div className="credentialsInfo__steps mb-5">
  <span className="step ml-4 mr-4 text-muted">Step 1</span>
  <span className="step ml-4 mr-4 text-muted">Step 2</span>
  <span className="step ml-4 mr-4 text-primary active">Step 3</span>
  <span className="step ml-4 mr-4 text-muted">Step 4</span>
  <span className="step ml-4 mr-4 text-muted">Step 5</span>
</div>
        <h3 className="credentialsInfo__subtitle">Step 3 : Credentials Information</h3>
      </div>
      <div className="row pl-5 pr-5">
        <div className="credentialsInfo__div col-xl-6">
            <input
            className="credentialsInfo__fileField"
            type="file"
            name="ssc"
            id="ssc"
            />
            <br/>
            <p className="mt-3">
                <label htmlFor="" className="credentialsInfo__label">
                    Upload SSC Certificate
                </label>
            </p>
        </div>
        <div className="credentialsInfo__div col-xl-6">
            <input
            className="credentialsInfo__fileField"
            type="file"
            name="bhc"
            id="bhc"
            />
            <br/>
            <p className="mt-3">
                <label htmlFor="" className="credentialsInfo__label">
                    Upload BSC/HND Certificate
                </label>
            </p>
        </div>
        <div className="credentialsInfo__div col-xl-6">
            <input
            className="credentialsInfo__fileField"
            type="file"
            name="olc"
            id="olc"
            />
            <br/>
            <p className="mt-3">
                <label htmlFor="" className="credentialsInfo__label">
                    Upload Operating License Certificate
                </label>
            </p>
        </div>
        <div className="credentialsInfo__div col-xl-6">
            <input
            className="credentialsInfo__fileField"
            type="file"
            name="opc"
            id="opc"
            />
            <br/>
            <p className="mt-3">
                <label htmlFor="" className="credentialsInfo__label">
                    Upload Other Professional Certificate
                </label>
            </p>
        </div>
    </div>
  </div>

<div className="signup__buttons">
<div className="signup__prev">
  <button className="btn bg-dark text-white rounded-0" onClick={() => props.changeTab(2)}>Back</button>
</div>

<div className="signup__next">
  <button className="btn bg-dark text-white rounded-0" onClick={() => props.changeTab(4)}>Next</button>
</div>
</div>
</React.Fragment>
  )
}

export default CredentialsInformation
