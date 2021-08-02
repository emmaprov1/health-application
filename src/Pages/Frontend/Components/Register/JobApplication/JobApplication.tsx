import React, { FC } from 'react'
import "./JobApplication.scss"

interface personaldata {
  changeTab:any
}

const JobApplication:FC<personaldata> = (props) => {
  return (
    <React.Fragment>
    <div className="jobApplication">
    <div className="jobApplication__titlebar">

<div className="jobApplication__steps mb-5">
  <span className="step ml-4 mr-4 text-muted">Step 1</span>
  <span className="step ml-4 mr-4 text-muted">Step 2</span>
  <span className="step ml-4 mr-4 text-muted">Step 3</span>
  <span className="step ml-4 mr-4 text-muted">Step 4</span>
  <span className="step ml-4 mr-4 text-primary active">Step 5</span>
</div>
        <h3 className="jobApplication__subtitle">Step 5 : Job Application</h3>
      </div>
      <div className="jobApplication__pvtData row mt-5 pl-4">
      <div className="form-group col-xl-12">
            <label htmlFor="state of origin" className="">
              Write Application Letter
            </label>
            <br />
            <textarea
              className="form-control"
              name="stateOfOrigin"
              id="stateOfOrigin"
              placeholder="e.g Hello! My name is..."
            ></textarea>
          </div>
          <div className="form-group col-xl-12">
            <label htmlFor="state of origin" className="">
              Permanent Job Category Role
            </label>
            <br />
            <select
              className="form-control"
              name="stateOfOrigin"
              id="stateOfOrigin"
              placeholder="e.g Doe"
            >
            <option value="consultant">Consultant</option>
              <option value="consultant">Registrar</option>
              <option value="consultant">Medical Officer</option>
            </select>
          </div>
    </div>
  </div>

<div className="signup__buttons">
<div className="signup__prev">
  <button className="btn bg-dark text-white rounded-0" onClick={() => props.changeTab(4)}>Back</button>
</div>

<div className="signup__next">
  <button className="btn bg-dark text-white rounded-0">Finish</button>
</div>
</div>
</React.Fragment>
  )
}

export default JobApplication
