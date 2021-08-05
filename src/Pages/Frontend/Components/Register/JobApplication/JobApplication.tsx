import React, { FC } from 'react'
import { DeepMap, FieldError, FieldValues, UseFormRegister } from 'react-hook-form'
import "./JobApplication.scss"

interface JobApplicationType {
  changeTab:(value: number) => void;
  register:UseFormRegister<FieldValues>;
  value:any;
  errors:DeepMap<FieldValues, FieldError>;
  handleChange:(e: any) => void;
  completeForm:()=>void;
  submited: boolean
}

const JobApplication:FC<JobApplicationType> = (props) => {
  const { coverLetter } = props.value
  return (
    // jobApplication markup
    <React.Fragment>
      <div className="jobApplication">
        {/* jobApplication title */}
        <div className="jobApplication__titlebar">
        <div className="stepwizard mb-5">
          <div className="stepwizard-row setup-panel">
              <div className="stepwizard-step">
                  <a href="#step-1" type="button" className="btn btn-default btn-circle">1</a>
                  <p>Step 1</p>
              </div>
              <div className="stepwizard-step">
                  <a href="#step-2" type="button" className="btn btn-default btn-circle">2</a>
                  <p>Step 2</p>
              </div>
              <div className="stepwizard-step">
                  <a href="#step-3" type="button" className="btn btn-default btn-circle">3</a>
                  <p>Step 3</p>
              </div>
              <div className="stepwizard-step">
                  <a href="#step-3" type="button" className="btn btn-default btn-circle">4</a>
                  <p>Step 4</p>
              </div>
              <div className="stepwizard-step">
                  <a href="#step-3" type="button" className="btn btn-primary btn-circle">5</a>
                  <p>Step 5</p>
              </div>
          </div>
        </div>
          <h4 className="jobApplication__subtitle">Step 5 : Job Role Application</h4>
        </div>

        {/* form - text fields - open */}
        <div className="jobApplication__textFields row pl-4">
          <div className="form-group col-xl-12">
            <label htmlFor="state of origin" className="">
              Write a cover letter
            </label>
            <br />
            <textarea
                className="form-control letterBox"
                id="stateOfOrigin"
                placeholder="e.g Hello! My name is..."
                {...props.register("coverLetter", {
                  required: 'this is a required field',
                  pattern: {
                    value:
                     /^[a-zA-Z]*$/,
                    message: 'Invalid input',
                  }
                })} value={coverLetter} onChange={props.handleChange}
              ></textarea>
              <div className="register--error text-danger">
                  {props.errors.coverLetter && props.errors.coverLetter.message}
              </div>
            </div>
        </div>

        <div className="jobApplication__textFields row pl-4">
          <div className="form-group col-xl-12">

            <br />
            <input
             type="checkbox"
             {...props.register("acknwoledgement", {
               required: 'Please tick the checkbox',
               pattern: {
                 value:
                  /^[a-zA-Z]*$/,
                 message: 'Invalid input',
               }
             })} value={'true'} onChange={props.handleChange}
              />
              <label htmlFor="state of origin" className="">
            I accept and acknwoledge that information provided are true to the best of my knowledge.
            </label>
              <div className="register--error text-danger">
                  {props.errors.coverLetter && props.errors.coverLetter.message}
              </div>
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

        {!props.submited && <button className="btn btn-dark btn-md" onClick={props.completeForm}>Submit</button>}

          {props.submited && <button className="btn btn-dark btn-md" disabled onClick={props.completeForm}>Submiting please wait
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div></button>}
          </div>
      </div>
    </React.Fragment>
  )
}

export default JobApplication
