import React, { FC } from 'react'
import "./AddressInformation.scss"

interface personaldata {
  changeTab:any
}

const AddressInformation:FC<personaldata> = (props) => {
  return (
    // addressInfo markup
    <React.Fragment>
      <div className="addressInfo">
        {/* addressInfo title */}
        <div className="addressInfo__titlebar">
          <div className="mb-5">
            <span className="step ml-4 mr-4 text-muted">Step 1</span>
            <span className="step ml-4 mr-4 text-primary active">Step 2</span>
            <span className="step ml-4 mr-4 text-muted">Step 3</span>
            <span className="step ml-4 mr-4 text-muted">Step 4</span>
            <span className="step ml-4 mr-4 text-muted">Step 5</span>
          </div>
          <h4 className="addressInfo__subtitle">Step 2 : Address Information</h4>
        </div>

        {/* form - text fields - open */}
        <div className="addressInfo__textFields row pl-4">
          <div className="form-group col-xl-6">
            <label htmlFor="state of origin">
              State Of Origin
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="stateOfOrigin"
              id="stateOfOrigin"
              placeholder="Kwara State"
            />
          </div>

          <div className="form-group col-xl-6">
            <label htmlFor="state of origin">
              Address Of Origin
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="addressOfOrigin"
              id="addressOfOrigin"
              placeholder="Offa, Kwara State State"
            />
          </div>
          <div className="form-group col-xl-6">
            <label htmlFor="state of origin">
              LGA Of Origin
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="stateOfOrigin"
              id="stateOfOrigin"
              placeholder="Offa LGA, Kwara State"
            />
          </div>
          <div className="form-group col-xl-6">
            <label htmlFor="state of origin">
              State Of Residence
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="stateOfOrigin"
              id="stateOfOrigin"
              placeholder="Lagos State"
            />
          </div>
          <div className="form-group col-xl-4">
            <label htmlFor="state of origin">
              Address Of Residence
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="stateOfOrigin"
              id="stateOfOrigin"
              placeholder="Lekki Phase 2, Lagos"
            />
          </div>

          <div className="form-group col-xl-4">
            <label htmlFor="state of origin">
              LGA Of Residence
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="stateOfOrigin"
              id="stateOfOrigin"
              placeholder="Lagos East"
            />
          </div>

          <div className="form-group col-xl-4">
            <label htmlFor="state of origin">
              Date of Birth
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="stateOfOrigin"
              id="stateOfOrigin"
              placeholder="15th December 1990"
            />
          </div>
        </div>
      </div>
      {/* form - text fields - open */}

      {/* back and next buttons */}
      <div className="ctrls pl-4 pr-4 mt-2">
        <div className="ctrls__back">
          <button type="button" className="ctrls__btn btn btn-secondary" onClick={() => props.changeTab(1)}>Back : Personal Information</button>
        </div>

        <div className="ctrls__next ml-5">
          <button type="button" className="ctrls__btn btn btn-dark" onClick={() => props.changeTab(3)}>Next : Credentials Information</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddressInformation
