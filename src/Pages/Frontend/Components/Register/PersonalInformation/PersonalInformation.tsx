import React, { FC } from 'react'
import "./PersonalInformation.scss"

interface personaldata {
  changeTab:any
}

const PersonalInformation:FC<personaldata> = (props) => {
  return (
    // personalInfo markup
    <React.Fragment>
      <div className="personalInfo">
        {/* personalInfo title */}
        <div className="personalInfo__titlebar">
          <div className="mb-5">
            <span className="step ml-4 mr-4 text-primary active">Step 1</span>
            <span className="step ml-4 mr-4 text-muted">Step 2</span>
            <span className="step ml-4 mr-4 text-muted">Step 3</span>
            <span className="step ml-4 mr-4 text-muted">Step 4</span>
            <span className="step ml-4 mr-4 text-muted">Step 5</span>
          </div>
        < h4 className="personalInfo__subtitle">Step 1 : Personal Information</h4>
        </div>

        {/* form - file field - open */}
        <div className="personalInfo__fileField">
          <div className="personalInfo__uploadFile">
            <input
              type="file"
              name="passport"
              id="passport"
            />
          </div>
          <p className="personalInfo__labelContainer text-center mt-3">
            <label htmlFor="upload passport">Upload Passport Photograph</label>
          </p>
        </div>
        {/* form - file field - close */}

        {/* form - text fields - open */}
        <div className="personalInfo__textFields row pl-4">
          <div className="form-group col-xl-6">
              <label htmlFor="surname">
                Surname
              </label>
              <br />
              <input
                className="form-control"
                type="text"
                name="surname"
                id="surname"
                placeholder="Gakumba"
              />
          </div>

          <div className="form-group col-xl-6">
            <label htmlFor="firstname">
              First Name
            </label>
            <input
              className="form-control"
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Leonard"
            />
          </div>

          <div className="form-group col-xl-6">
            <label htmlFor="middlename" className="personalInfo__label">
              Middle Name
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="middlename"
              id="middlename"
              placeholder="Farruko"
            />
          </div>

          <div className="form-group col-xl-6">
            <label htmlFor="phone" className="personalInfo__label">
              Phone Number
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="phoneNo"
              id="phoneNo"
              placeholder="(234) 091 234 5678"
            />
          </div>

          <div className="form-group col-xl-6">
            <label htmlFor="email" className="personalInfo__label">
              Email Address
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="email"
              id="email"
              placeholder="leongakumba@hotmail.com"
            />
          </div>

          <div className="form-group  col-xl-6">
            <label htmlFor="gender" className="personalInfo__label">
              Gender
            </label>
            <br />
            <select
              className="form-control"
              name="gender"
              id="gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
      </div>
      {/* form - text fields - close */}

      {/* back and next buttons */}
      <div className="ctrls pl-4 mt-2">
        {/* <div className="ctrls__back">
          <button type="button" className="ctrls__btn btn btn-secondary rounded-0">Back</button>
        </div> */}

        <div className="ctrls__next">
          <button type="button" className="ctrls__btn btn btn-dark" onClick={() => props.changeTab(2)}>Next</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PersonalInformation
