import React, { FC } from 'react'
import "./MoreCredentials.scss"

interface personaldata {
  changeTab:any
}

const MoreCredentials:FC<personaldata> = (props) => {
  return (
    <React.Fragment>
    <div className="moreCredentials">
    <div className="credentialsInfo__titlebar">

<div className="credentialsInfo__steps mb-5">
  <span className="step ml-4 mr-4 text-muted">Step 1</span>
  <span className="step ml-4 mr-4 text-muted">Step 2</span>
  <span className="step ml-4 mr-4 text-muted">Step 3</span>
  <span className="step ml-4 mr-4 text-primary active">Step 4</span>
  <span className="step ml-4 mr-4 text-muted">Step 5</span>
</div>
        <h3 className="credentialsInfo__subtitle">Step 4 : More Credentials</h3>
      </div>
      <div className="row pl-5 pr-5">
        <div className="moreCredentials__div col-xl-6">
            <input
            className="moreCredentials__fileField"
            type="file"
            name="ssc"
            id="ssc"
            />
            <br/>
            <p className="mt-3">
                <label htmlFor="" className="moreCredentials__label">
                    Upload LGA Certificate
                </label>
            </p>
        </div>
        <div className="moreCredentials__div col-xl-6">
            <input
            className="moreCredentials__fileField"
            type="file"
            name="bhc"
            id="bhc"
            />
            <br/>
            <p className="mt-3">
                <label htmlFor="" className="moreCredentials__label">
                    Upload Government Issued ID
                </label>
            </p>
        </div>
    </div>
  </div>

<div className="signup__buttons">
<div className="signup__prev">
  <button className="btn bg-dark text-white rounded-0" onClick={() => props.changeTab(3)}>Back</button>
</div>

<div className="signup__next">
  <button className="btn bg-dark text-white rounded-0" onClick={() => props.changeTab(5)}>Next</button>
</div>
</div>
</React.Fragment>
  )
}

export default MoreCredentials
