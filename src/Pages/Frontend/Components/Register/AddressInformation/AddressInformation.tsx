import React, { FC } from 'react'
import { DeepMap, FieldError, FieldValues, UseFormRegister } from 'react-hook-form'
import "./AddressInformation.scss"

import state from '../../../../../Data/state.json'
import lga from '../../../../../Data/lga.json'

interface AddressInformationType {
  changeTab:(value: number) => void;
  register:UseFormRegister<FieldValues>;
  value:any;
  errors:DeepMap<FieldValues, FieldError>;
  handleChange:(e: any) => void;
}

const AddressInformation:FC<AddressInformationType> = (props) => {
  const { stateOfOrigin, lgaOfOrigin, workDuration, addressOfOrigin, stateOfResidence, addressOfResidence, lgaOfResidence } = props.value
  let disable = true
  // simple validation
  if (stateOfOrigin !== "" && lgaOfOrigin !== "" && workDuration !== "" && addressOfOrigin !== "" && stateOfResidence !== "" && addressOfResidence !== "" && lgaOfResidence !== "") {
    disable = false
  }

  const selectedLga = lga[2].data?.filter((lgas) => {
    return lgas.state_id === stateOfOrigin;
  });

  const resSelectedLga = lga[2].data?.filter((lgas) => {
    return lgas.state_id === stateOfResidence;
  });

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
              State Of Origin <span className="text-danger">*</span>
            </label>
            <br />
            <select
              className="form-control"
              id="stateOfOrigin"
              {...props.register("stateOfOrigin", {
                required: 'this is a required field',
                pattern: {
                  value:
                   /^[a-zA-Z]*$/,
                  message: 'Invalid input',
                }
              })} onChange={props.handleChange}
            ><option value="null">--choose--</option>
              {state[2].data?.map((statelist: { id: any; name: any }, Index: React.Key | null | undefined) => {
                const { id, name } = statelist
                return (<option value={id} key={Index}>{name}</option>)
              })}
                    </select>
            <div className="register--error text-danger">
                {props.errors.stateOfOrigin && props.errors.stateOfOrigin.message}
            </div>
          </div>

          <div className="form-group col-xl-6">
            <label htmlFor="lgaOfOrigin">
              LGA Of Origin <span className="text-danger">*</span>
            </label>
            <br />
            <select
              className="form-control"
              id="lgaOfOrigin"
              {...props.register("lgaOfOrigin", {
                required: 'this is a required field',
                pattern: {
                  value:
                   /^[a-zA-Z]*$/,
                  message: 'Invalid input',
                }
              })}
              value={lgaOfOrigin}
              onChange={props.handleChange}
            >
                 <option value="null">--choose--</option>
                    {selectedLga?.map((lgalist, Index: React.Key | null | undefined) => {
                      const { id, name } = lgalist
                      return (<option value={id} key={Index}>{name}</option>)
                    })}

              </select>
            <div className="register--error text-danger">
                {props.errors.lgaOfOrigin && props.errors.lgaOfOrigin.message}
            </div>
          </div>

          <div className="form-group col-xl-6">
            <label htmlFor="state of origin">
              Address Of Origin <span className="text-danger">*</span>
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
              State Of Residence <span className="text-danger">*</span>
            </label>
            <br />
            <select
              className="form-control"
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
            >
              <option value="null">--choose--</option>
              {state[2].data?.map((statelist: { id: any; name: any }, Index: React.Key | null | undefined) => {
                const { id, name } = statelist
                return (<option value={id} key={Index}>{name}</option>)
              })}
              </select>
            <div className="register--error text-danger">
                {props.errors.stateOfResidence && props.errors.stateOfResidence.message}
            </div>
          </div>

          <div className="form-group col-xl-4">
            <label htmlFor="state of origin">
              LGA Of Residence <span className="text-danger">*</span>
            </label>
            <br />
            <select
              className="form-control"
              id="stateOfOrigin"
              {...props.register("lgaOfResidence", {
                required: 'this is a required field',
                pattern: {
                  value:
                   /^[a-zA-Z]*$/,
                  message: 'Invalid input',
                }
              })}
              value={lgaOfResidence}
              onChange={props.handleChange}
            >
              <option value="null">--choose--</option>
                    {resSelectedLga?.map((lgalist, Index: React.Key | null | undefined) => {
                      const { id, name } = lgalist
                      return (<option value={id} key={Index}>{name}</option>)
                    })}

              </select>

            <div className="register--error text-danger">
                {props.errors.lgaOfResidence && props.errors.lgaOfResidence.message}
            </div>
          </div>

          <div className="form-group col-xl-4">
            <label htmlFor="addressOfResidence">
              Address Of Residence <span className="text-danger">*</span>
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              id="addressOfResidence"
              placeholder="Lekki Phase 2, Lagos"
              {...props.register("addressOfResidence", {
                required: 'this is a required field',
                pattern: {
                  value:
                   /^[a-zA-Z]*$/,
                  message: 'Invalid input',
                }
              })} value={addressOfResidence} onChange={props.handleChange}
            />
            <div className="register--error text-danger">
                {props.errors.addressOfResidence && props.errors.addressOfResidence.message}
            </div>
          </div>

          <div className="form-group col-xl-4">
            <label htmlFor="workDuration">
            How Long Do you Wish to Work with LSHSC <span className="text-danger">*</span>
            </label>
            <br />
            <select
              className="form-control"
              id="workDuration"
              {...props.register("workDuration", {
                required: 'this is a required field',
                pattern: {
                  value:
                   /^[a-zA-Z]*$/,
                  message: 'Invalid input',
                }
              })}
              value={workDuration}
              onChange={props.handleChange}
            >
              <option value="null">--choose--</option>
              <option>6 Month</option>
              <option>1 year</option>
              <option>2 years</option>
              <option>3 years</option>
              <option>4 years</option>
              <option>5 years</option>
              <option>Above</option>
              </select>
            <div className="register--error text-danger">
                {props.errors.workDuration && props.errors.workDuration.message}
            </div>
          </div>
        </div>
      </div>
      {/* form - text fields - open */}

      {/* back and next buttons */}
      <div className="ctrls pl-4 pr-4 mt-2">
        <div className="ctrls__back">
          <button type="button" className=" btn btn-dark" onClick={() => props.changeTab(1)}>Back : Personal Information</button>
        </div>

        <div className="ctrls__next ml-5">
          <button type="button" className=" btn btn-dark" onClick={() => props.changeTab(3)} disabled={disable}>Next : Credentials Information</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddressInformation
