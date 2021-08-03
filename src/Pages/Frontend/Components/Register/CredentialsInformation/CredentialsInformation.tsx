import React, { FC } from 'react'
import "./CredentialsInformation.scss"

interface personaldata {
  changeTab:any
}

const CredentialsInformation:FC<personaldata> = (props) => {
  return (
    // credentialsInfo markup
    <React.Fragment>
    <div className="credentialsInfo">
      {/* credentialsInfo title */}
      <div className="credentialsInfo__titlebar">
        <div className="mb-5">
          <span className="step ml-4 mr-4 text-muted">Step 1</span>
          <span className="step ml-4 mr-4 text-muted">Step 2</span>
          <span className="step ml-4 mr-4 text-primary active">Step 3</span>
          <span className="step ml-4 mr-4 text-muted">Step 4</span>
          <span className="step ml-4 mr-4 text-muted">Step 5</span>
        </div>
        <h4 className="credentialsInfo__subtitle">Step 3 : Credentials Information</h4>
      </div>

      {/* form - text fields - open */}
      <div className="credentialsInfo__fileFields row pl-4 pr-4">
        <div className="credentialsInfo__fileField col-xl-6">
            <div className="credentialsInfo__uploadFile">
              <input
                type="file"
                name="sscert"
                id="sscert"
              />
            </div>
            <p className="credentialsInfo__labelContainer text-center mt-3">
              <label htmlFor="upload passport">Upload SSC Certificate</label>
            </p>
          </div>

          <div className="credentialsInfo__fileField col-xl-6">
            <div className="credentialsInfo__uploadFile">
              <input
                type="file"
                name="sscert"
                id="sscert"
              />
            </div>
            <p className="credentialsInfo__labelContainer text-center mt-3">
              <label htmlFor="upload passport">Upload BSC/HND Certificate</label>
            </p>
          </div>

          <div className="credentialsInfo__fileField col-xl-6">
            <div className="credentialsInfo__uploadFile">
              <input
                type="file"
                name="sscert"
                id="sscert"
              />
            </div>
            <p className="credentialsInfo__labelContainer text-center mt-3">
              <label htmlFor="upload passport">Upload Operating License Certificate</label>
            </p>
          </div>

          <div className="credentialsInfo__fileField col-xl-6">
            <div className="credentialsInfo__uploadFile">
              <input
                type="file"
                name="sscert"
                id="sscert"
              />
            </div>
            <p className="credentialsInfo__labelContainer text-center mt-3">
              <label htmlFor="upload passport">Upload Other Professional Certificates</label>
            </p>
          </div>
        </div>
      </div>

      {/* back and next buttons */}
      <div className="ctrls pl-4 pr-4 mt-2">
        <div className="ctrls__back">
          <button type="button" className="ctrls__btn btn btn-secondary rounded-0" onClick={() => props.changeTab(2)}>Back : Address Information</button>
        </div>

        <div className="ctrls__next ml-5">
          <button type="button" className="ctrls__btn btn btn-dark rounded-0" onClick={() => props.changeTab(4)}>Next : More Credentials</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CredentialsInformation
