import React, { FC } from 'react'
import "./PersonalInformation.scss"

interface personaldata {
  changeTab:any
}

const PersonalInformation:FC<personaldata> = (props) => {
  return (
    <React.Fragment>
    <div className="personalInfo">
      <h3 className="personalInfo__subtitle">
        Step 1 : Personal Information
      </h3>
      {/* passport */}
      <div className="personalInfo__passport personalInfo__div mb-2">
        <input
          className="personalInfo__photoInput"
          type="file"
          name="passport"
          id="passport"
        />
      </div>
      <div className="personalInfo__pvtData row mt-5 pl-4">
        <div className="form-group col-xl-6">
            <label htmlFor="surname" className="">
              Surname
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="surname"
              id="surname"
              placeholder="e.g Doe"
            />
          </div>

        <div className="form-group col-xl-6">
          <label htmlFor="firstname" className="">
            First Name
          </label>
          <input
            className="form-control"
            type="text"
            name="firstname"
            id="firstname"
            placeholder="e.g John"
          />
        </div>

        <div className="form-group  col-xl-6">
          <label htmlFor="middlename" className="personalInfo__label">
            Middle Name
          </label>
          <br />
          <input
            className="form-control"
            type="text"
            name="middlename"
            id="middlename"
            placeholder="e.g Brian"
          />
        </div>

      <div className="form-group  col-xl-6">
          <label htmlFor="phoneNo" className="personalInfo__label">
            Phone Number
          </label>
          <br />
          <input
            className="form-control"
            type="text"
            name="phoneNo"
            id="phoneNo"
            placeholder="e.g 0902 584 0240"
          />
        </div>

        <div className="form-group  col-xl-6">
          <label htmlFor="email" className="personalInfo__label">
            Email Address
          </label>
          <br />
          <input
            className="form-control"
            type="text"
            name="email"
            id="email"
            placeholder="e.g johnbdoe@hotmail.com"
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

<div className="signup__buttons">
<div className="signup__prev">
  <button className="btn bg-dark text-white rounded-0">Go back</button>
</div>

<div className="signup__next">
  <button className="btn bg-dark text-white rounded-0" onClick={() => props.changeTab(2)}>Continue</button>
</div>
</div>
</React.Fragment>
  )
}

export default PersonalInformation
