import React, { FC } from 'react'
import state from '../../../../../Data/state.json'
import lga from '../../../../../Data/lga.json'
interface propsType {
    value: any;
    disable: boolean;
}

const PersonalInformationSlip:FC<propsType> = ({ value, disable }) => {
  const {
    surname,
    jobRole,
    firstname,
    middlename,
    phoneNo,
    phoneNo2,
    email,
    email2,
    gender,
    stateOfOrigin,
    addressOfOrigin,
    dateOfBirth,
    stateOfResidence,
    addressOfResidence,
    lgaOfResidence,

  } = value

  const stateOfResidenceName:any = state[2].data?.filter((obj:any) => {
    return obj.id === stateOfResidence?.toString()
  })[0]?.name

  const stateOfOriginName:any = state[2].data?.filter((obj:any) => {
    return obj.id === stateOfOrigin?.toString()
  })[0]?.name

  const lgaOfResidenceName:any = lga[2].data?.filter((obj:any) => {
    return obj.id === lgaOfResidence?.toString()
  })[0]?.name

  return (
        <div className="card">
        <div className="card-header">
            <div className="c-header-crib-2">
                <span></span>
                <span></span>
                <span></span>
            </div>
            Personal information
            <div className="c-header-crib">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
       {disable === true && (
         <div className="card-body">
            <div className="container-fluid">
              <div className="row">

                <div className="col-md-6 form-group">
                    <label>Surname </label>
                    <input type="text" className="form-control rounded-0" value={surname} readOnly/>
                </div>
                <div className="col-md-6 form-group">
                    <label>Firstname: </label>
                    <input type="text" name="" className="form-control rounded-0" value={firstname} readOnly/>
                </div>
                <div className="col-md-5 form-group">
                    <label> Middle name </label>
                    <input className="form-control rounded-0" value={middlename} readOnly/>
                </div>
                <div className="col-md-3 form-group">
                    <label>Job Role </label>
                    <input className="form-control rounded-0" value={jobRole} readOnly/>
                </div>
                <div className="col-md-6 form-group">
                    <label> Phone No1 </label>
                    <input type="text" name="" className="form-control rounded-0" value={phoneNo} readOnly/>
                </div>
                <div className="col-md-6 form-group">
                    <label> Phone No2 </label>
                    <input type="text" name="" className="form-control rounded-0" value={phoneNo2} readOnly/>
                </div>
                <div className="col-md-6 form-group">
                    <label> Email Address1 </label>
                    <input type="text" name="" className="form-control rounded-0" value={email} readOnly/>
                </div>
                <div className="col-md-6 form-group">
                    <label> Email Address2 </label>
                    <input type="text" name="" className="form-control rounded-0" value={email2} readOnly/>
                </div>

                <div className="col-md-3 form-group">
                    <label> Sex </label>
                    <input className="form-control rounded-0" value={gender} readOnly/>
                </div>
                <div className="col-md-4 form-group">
                   <label htmlFor="stateOfOrigin">State of Origin </label>
                    <input className="form-control rounded-0" id="stateOfOrigin" value={stateOfOriginName} readOnly/>
                </div>
               <div className="col-md-5 form-group">
                   <label htmlFor="deptZoneCommand">State of origin </label>
                    <input className="form-control rounded-0" id="stateOfOrigin" value={addressOfOrigin} readOnly/>
                </div>
               <div className="col-md-5 form-group">
                   <label htmlFor="deptZoneCommand">Address of State of origin </label>
                    <input className="form-control rounded-0" id="stateOfOrigin" value={addressOfOrigin} readOnly/>
                </div>

                <div className="col-md-6 form-group">
                    <label> Date of Birth</label>
                    <input type="text" name="" className="form-control rounded-0" value={dateOfBirth}/>
                </div>

                <div className="col-md-6 form-group">
                    <label> State of residence</label>
                    <input type="text" name="" className="form-control rounded-0" value={stateOfResidenceName} readOnly/>
                </div>
                <div className="col-md-6 form-group">
                    <label>Address of residence</label>
                    <input className="form-control rounded-0" value={addressOfResidence} readOnly/>
                </div>

                <div className="col-md-6 form-group">
                    <label>Local government of residence </label>
                    <input type="text" name="" className="form-control rounded-0" value={lgaOfResidenceName} readOnly/>
                </div>
              </div>
            </div>
        </div>)}
    </div>
  )
}

export default PersonalInformationSlip
