import React, { FC } from 'react'
import { DeepMap, FieldError, FieldValues, UseFormRegister } from 'react-hook-form'
import "./AddressInformation.scss"

interface AddressInformationType {
  changeTab:(value: number) => void;
  register:UseFormRegister<FieldValues>;
  value:any;
  errors:DeepMap<FieldValues, FieldError>;
  handleChange:(e: any) => void;
}

const AddressInformation:FC<AddressInformationType> = (props) => {
  const { stateOfOrigin, addressOfOrigin, stateOfResidence, addressOfRecidence, lgaOfResidence } = props.value
  return (
    // addressInfo markup
    <React.Fragment>
      <div className="addressInfo">
        {/* addressInfo title */}
        <div className="addressInfo__titlebar">
        <div className="stepwizard mb-5">
          <div className="stepwizard-row setup-panel">
              <div className="stepwizard-step">
                  <a href="#step-1" type="button" className="btn btn-default btn-circle">1</a>
                  <p>Step 1</p>
              </div>
              <div className="stepwizard-step">
                  <a href="#step-2" type="button" className="btn btn-primary btn-circle">2</a>
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
                  <a href="#step-3" type="button" className="btn btn-default btn-circle">5</a>
                  <p>Step 5</p>
              </div>
          </div>
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
              id="stateOfOrigin"
              placeholder="Kwara State"
              {...props.register("stateOfOrigin", {
                required: 'this is a required field',
                pattern: {
                  value:
                   /^[a-zA-Z]*$/,
                  message: 'Invalid input',
                }
              })} value={stateOfOrigin} onChange={props.handleChange}
            />
            <div className="register--error text-danger">
                {props.errors.stateOfOrigin && props.errors.stateOfOrigin.message}
            </div>
          </div>

          <div className="form-group col-xl-6">
            <label htmlFor="state of origin">
              Address Of Origin
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              id="addressOfOrigin"
              placeholder="Offa, Kwara State State"
              {...props.register("addressOfOrigin", {
                required: 'this is a required field',
                pattern: {
                  value:
                   /^[a-zA-Z]*$/,
                  message: 'Invalid input',
                }
              })} value={addressOfOrigin} onChange={props.handleChange}
            />
            <div className="register--error text-danger">
                {props.errors.addressOfOrigin && props.errors.addressOfOrigin.message}
            </div>
          </div>
          <div className="form-group col-xl-6">
            <label htmlFor="state of origin">
              LGA Of Origin
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              id="stateOfOrigin"
              placeholder="Offa LGA, Kwara State"
              {...props.register("stateOfOrigin", {
                required: 'this is a required field',
                pattern: {
                  value:
                   /^[a-zA-Z]*$/,
                  message: 'Invalid input',
                }
              })} value={stateOfOrigin} onChange={props.handleChange}
            />
            <div className="register--error text-danger">
                {props.errors.stateOfOrigin && props.errors.stateOfOrigin.message}
            </div>
          </div>
          <div className="form-group col-xl-6">
            <label htmlFor="state of origin">
              State Of Residence
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              id="stateOfOrigin"
              placeholder="Lagos State"
              {...props.register("stateOfResidence", {
                required: 'this is a required field',
                pattern: {
                  value:
                   /^[a-zA-Z]*$/,
                  message: 'Invalid input',
                }
              })} value={stateOfResidence} onChange={props.handleChange}
            />
            <div className="register--error text-danger">
                {props.errors.stateOfResidence && props.errors.stateOfResidence.message}
            </div>
          </div>
          <div className="form-group col-xl-4">
            <label htmlFor="state of origin">
              Address Of Residence
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              id="stateOfOrigin"
              placeholder="Lekki Phase 2, Lagos"
              {...props.register("addressOfRecidence", {
                required: 'this is a required field',
                pattern: {
                  value:
                   /^[a-zA-Z]*$/,
                  message: 'Invalid input',
                }
              })} value={addressOfRecidence} onChange={props.handleChange}
            />
            <div className="register--error text-danger">
                {props.errors.addressOfRecidence && props.errors.addressOfRecidence.message}
            </div>
          </div>

          <div className="form-group col-xl-4">
            <label htmlFor="state of origin">
              LGA Of Residence
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              id="stateOfOrigin"
              placeholder="Lagos East"
              {...props.register("lgaOfResidence", {
                required: 'this is a required field',
                pattern: {
                  value:
                   /^[a-zA-Z]*$/,
                  message: 'Invalid input',
                }
              })} value={lgaOfResidence} onChange={props.handleChange}
            />
            <div className="register--error text-danger">
                {props.errors.lgaOfResidence && props.errors.lgaOfResidence.message}
            </div>
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
