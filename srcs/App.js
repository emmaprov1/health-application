import "./App.css";
import React, { Component } from "react";

// component : personalInfo
class PersonalInfo extends React.Component {
  render() {
    // markup for the component
    return (
      <div className="personalInfo">
        {/* title */}
        <h3 className="personalInfo__subtitle">
          Step 1 : Personal Information
        </h3>
        {/* passport */}
        <div className="personalInfo__passport personalInfo__div">
          <input
            className="personalInfo__photoInput"
            type="file"
            name="passport"
            id="passport"
          />
        </div>
        <div className="personalInfo__pvtData">
          <div className="personalInfo__surname">
            <label htmlFor="surname" className="personalInfo__label">
              Surname
            </label>
            <br />
            <input
              className="personalInfo__field"
              type="text"
              name="surname"
              id="surname"
              placeholder="e.g Doe"
            />
          </div>

          <div className="personalInfo__firstname">
            <label htmlFor="firstname" className="personalInfo__label">
              First Name
            </label>
            <br />
            <input
              className="personalInfo__field"
              type="text"
              name="firstname"
              id="firstname"
              placeholder="e.g John"
            />
          </div>

          <div className="personalInfo__middlename">
            <label htmlFor="middlename" className="personalInfo__label">
              Middle Name
            </label>
            <br />
            <input
              className="personalInfo__field"
              type="text"
              name="middlename"
              id="middlename"
              placeholder="e.g Brian"
            />
          </div>
        </div>

        <div className="personalInfo__otherData">
          <div className="personalInfo__phoneNo">
            <label htmlFor="phoneNo" className="personalInfo__label">
              Phone Number
            </label>
            <br />
            <input
              className="personalInfo__field"
              type="text"
              name="phoneNo"
              id="phoneNo"
              placeholder="e.g 0902 584 0240"
            />
          </div>

          <div className="personalInfo__email">
            <label htmlFor="email" className="personalInfo__label">
              Email Address
            </label>
            <br />
            <input
              className="personalInfo__field"
              type="text"
              name="email"
              id="email"
              placeholder="e.g johnbdoe@hotmail.com"
            />
          </div>

          <div className="personalInfo__gender">
            <label htmlFor="gender" className="personalInfo__label">
              Gender
            </label>
            <br />
            <select
              className="personalInfo__field personalInfo__genderInput"
              name="gender"
              id="gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

// component : registration
function App() {
  return (
    <div className="signup">
      {/* <h1 className="signup__title">Create an Account</h1> */}
      <form className="signup__formHandler">
        <PersonalInfo />
        {/* controls : buttons */}
        <div className="signup__buttons">
          <div className="signup__prev">
            <button className="signup__prevBtn">GO BACK</button>
          </div>

          <div className="signup__next">
            <button className="signup__nextBtn">CONTINUE</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
