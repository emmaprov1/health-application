import React, { FC } from 'react'
import "./MoreCredentials.scss"

interface personaldata {
  changeTab:any
}

const MoreCredentials:FC<personaldata> = (props) => {
  return (
    <React.Fragment>
      {/* moreCredentials markup */}
      <div className="moreCredentials">
        {/* moreCredentials title */}
        <div className="moreCredentials__titlebar">
          <div className="mb-5">
            <span className="step ml-4 mr-4 text-muted">Step 1</span>
            <span className="step ml-4 mr-4 text-muted">Step 2</span>
            <span className="step ml-4 mr-4 text-muted">Step 3</span>
            <span className="step ml-4 mr-4 text-primary active">Step 4</span>
            <span className="step ml-4 mr-4 text-muted">Step 5</span>
          </div>
          <h4 className="moreCredentials__subtitle">Step 4 : More Credentials</h4>
        </div>
      </div>

      {/* form - file fields - open */}
      <div className="moreCredentials__fileFields row pl-4 pr-4">
      <div className="moreCredentials__fileField col-xl-6">
          <div className="moreCredentials__uploadFile">
            <input
              type="file"
              name="sscert"
              id="sscert"
            />
          </div>
          <p className="moreCredentials__labelContainer text-center mt-3">
            <label htmlFor="upload passport">Upload LGA Certificate</label>
          </p>
        </div>

        <div className="moreCredentials__fileField col-xl-6">
          <div className="moreCredentials__uploadFile">
            <input
              type="file"
              name="sscert"
              id="sscert"
            />
          </div>
          <p className="moreCredentials__labelContainer text-center mt-3">
            <label htmlFor="upload passport">Upload Government Issued ID</label>
          </p>
        </div>
      </div>

      {/* back and next buttons */}
      <div className="ctrls pl-4 pr-4 mt-2">
        <div className="ctrls__back">
          <button type="button" className="ctrls__btn btn btn-secondary" onClick={() => props.changeTab(3)}>Back : Credentials Information</button>
        </div>

        <div className="ctrls__next ml-5">
          <button type="button" className="ctrls__btn btn btn-dark" onClick={() => props.changeTab(5)}>Next : Job Role Application</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MoreCredentials
