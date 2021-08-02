import React, { FC } from 'react'
import "./AddressInformation.scss"

interface personaldata {
  changeTab:any
}

const AddressInformation:FC<personaldata> = (props) => {
  return (
    <React.Fragment>
    <div className="addressInfo">
    <div className="addressInfo__titlebar">

<div className="addressInfo__steps mb-5">
  <span className="step ml-4 mr-4 text-muted">Step 1</span>
  <span className="step ml-4 mr-4 text-primary active">Step 2</span>
  <span className="step ml-4 mr-4 text-muted">Step 3</span>
  <span className="step ml-4 mr-4 text-muted">Step 4</span>
  <span className="step ml-4 mr-4 text-muted">Step 5</span>
</div>
        <h3 className="addressInfo__subtitle">Step 2 : Address Information</h3>
      </div>
      <div className="addressInfo__pvtData row mt-5 pl-4">
        <div className="form-group col-xl-6">
            <label htmlFor="state of origin" className="">
              State Of Origin
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="stateOfOrigin"
              id="stateOfOrigin"
              placeholder="e.g Kwara State"
            />
          </div>

          <div className="form-group col-xl-6">
            <label htmlFor="state of origin" className="">
              Address Of Origin
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="addressOfOrigin"
              id="addressOfOrigin"
              placeholder="e.g Offa, Kwara State State"
            />
          </div>
          <div className="form-group col-xl-6">
            <label htmlFor="state of origin" className="">
              LGA Of Origin
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="stateOfOrigin"
              id="stateOfOrigin"
              placeholder="e.g Offa LGA, Kwara State"
            />
          </div>
          <div className="form-group col-xl-6">
            <label htmlFor="state of origin" className="">
              State Of Residence
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="stateOfOrigin"
              id="stateOfOrigin"
              placeholder="e.g Lagos State"
            />
          </div>
          <div className="form-group col-xl-4">
            <label htmlFor="state of origin" className="">
              Address Of Residence
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="stateOfOrigin"
              id="stateOfOrigin"
              placeholder="e.g Lekki Phase 2, Lagos"
            />
          </div>

          <div className="form-group col-xl-4">
            <label htmlFor="state of origin" className="">
              LGA Of Residence
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="stateOfOrigin"
              id="stateOfOrigin"
              placeholder="e.g Lagos East"
            />
          </div>

          <div className="form-group col-xl-4">
            <label htmlFor="state of origin" className="">
              Date of Birth
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="stateOfOrigin"
              id="stateOfOrigin"
              placeholder="e.g 15th December 1990"
            />
          </div>
    </div>
  </div>

<div className="signup__buttons">
<div className="signup__prev">
  <button className="btn bg-dark text-white rounded-0" onClick={() => props.changeTab(1)}>Back</button>
</div>

<div className="signup__next">
  <button className="btn bg-dark text-white rounded-0" onClick={() => props.changeTab(3)}>Next</button>
</div>
</div>
</React.Fragment>
  )
}

export default AddressInformation
