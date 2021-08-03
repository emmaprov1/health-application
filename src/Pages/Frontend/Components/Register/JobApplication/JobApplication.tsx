import React, { FC } from 'react'
import "./JobApplication.scss"

interface personaldata {
  changeTab:any
}

const JobApplication:FC<personaldata> = (props) => {
  return (
    // jobApplication markup
    <React.Fragment>
      <div className="jobApplication">
        {/* jobApplication title */}
        <div className="jobApplication__titlebar">
          <div className="mb-5">
            <span className="step ml-4 mr-4 text-muted">Step 1</span>
            <span className="step ml-4 mr-4 text-muted">Step 2</span>
            <span className="step ml-4 mr-4 text-muted">Step 3</span>
            <span className="step ml-4 mr-4 text-muted">Step 4</span>
            <span className="step ml-4 mr-4 text-primary active">Step 5</span>
          </div>
          <h4 className="jobApplication__subtitle">Step 5 : Job Role Application</h4>
        </div>

        {/* form - text fields - open */}
        <div className="jobApplication__textFields row pl-4">
          <div className="form-group col-xl-12">
            <label htmlFor="state of origin" className="">
              Write Application Letter
            </label>
            <br />
            <textarea
                className="form-control letterBox"
                name="stateOfOrigin"
                id="stateOfOrigin"
                placeholder="e.g Hello! My name is..."
              ></textarea>
            </div>
        </div>

        <div className="jobApplication__textFields row pl-4">
          <div className="form-group col-xl-12">

            <br />
            <input
             type="checkbox"
              />
              <label htmlFor="state of origin" className="">
            I accept and acknwoledge that information provided are true to the best of my knowledge.
            </label>
            </div>
        </div>
      </div>
      {/* form - text fields - open */}

      {/* back and next buttons */}
      <div className="ctrls pl-4 pr-4 mt-2">
        <div className="ctrls__back">
          <button type="button" className="ctrls__btn btn btn-secondary rounded-0" onClick={() => props.changeTab(4)}>Back : More Credentials</button>
        </div>

        <div className="ctrls__next ml-5">
          <button type="button" className="ctrls__btn btn btn-dark rounded-0" onClick={() => props.changeTab(5)}>Submit : Finish Registration</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default JobApplication
