import React, { FC } from 'react'
import state from '../../../../../Data/state.json'
import lga from '../../../../../Data/lga.json'
interface propsType {
    value: any;
    disable: boolean;
}

const generalDutyOrSpecialistArray = [
  { id: 13, name: "General Duty" },
  { id: 1, name: "Electrician" },
  { id: 2, name: "Merson" },
  { id: 3, name: "Plumber" },
  { id: 4, name: "Painter" },
  { id: 5, name: "Tailor" },
  { id: 7, name: "Welder" },
  { id: 8, name: "Driver" },
  { id: 10, name: "Veterinary" },
  { id: 11, name: "Mounted Troop" },
  { id: 12, name: "K-9" }
]
const secondMentData = [
  { id: 1, name: "Presidency" },
  { id: 2, name: "ADC" },
  { id: 3, name: "EFCC" },
  { id: 4, name: "ICPC" },
  { id: 5, name: "INEC" },
  { id: 6, name: "ECOWAS" },
  { id: 7, name: "UN" },
  { id: 8, name: "AU" },
  { id: 9, name: "EU" },
  { id: 10, name: "NASS" },
]

const PersonalInformationSlip:FC<propsType> = ({ value, disable }) => {
  const {
    surName, firstName, lastName, substansiveRank, phoneNumber, email, sex, stateOfOrigin,
    localGovernmentArea, /* dateOfBirth, */
    dateOfEnlistment, rankOnEnlistment, discipline, generalDutyOrSpecialist, secondment, actingCapacity, deptZoneCommand
  } = value

  const stateName:any = state[2].data?.filter((obj:any) => {
    return obj.id === stateOfOrigin?.toString()
  })[0]?.name

  const lgaName:any = lga[2].data?.filter((obj:any) => {
    return obj.id === localGovernmentArea?.toString()
  })[0]?.name

  const specialDuties = generalDutyOrSpecialistArray.filter((obj:any) => {
    return obj.id === generalDutyOrSpecialist
  })[0]?.name

  const secondmentValue = secondMentData.filter((obj:any) => {
    return obj.id === secondment
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
                    <input type="text" className="form-control rounded-0" value={surName} readOnly/>
                </div>
                <div className="col-md-6 form-group">
                    <label>Firstname: </label>
                    <input type="text" name="" className="form-control rounded-0" value={firstName} readOnly/>
                </div>
                <div className="col-md-4 form-group">
                    <label> Last name </label>
                    <input type="text" name="" className="form-control rounded-0" value={lastName} readOnly/>
                </div>
                <div className="col-md-5 form-group">
                    <label> Substansive Rank </label>
                    <input className="form-control rounded-0" value={substansiveRank} readOnly/>
                </div>
                <div className="col-md-3 form-group">
                    <label> Are you on Acting Capacity </label>
                    <input className="form-control rounded-0" value={actingCapacity} readOnly/>
                </div>
                <div className="col-md-6 form-group">
                    <label> Phone No </label>
                    <input type="text" name="" className="form-control rounded-0" value={phoneNumber} readOnly/>
                </div>
                <div className="col-md-6 form-group">
                    <label> Email Address </label>
                    <input type="text" name="" className="form-control rounded-0" value={email} readOnly/>
                </div>

                <div className="col-md-3 form-group">
                    <label> Sex </label>
                    <input className="form-control rounded-0" value={sex === 1 ? "male" : "female"} readOnly/>
                </div>
                <div className="col-md-4 form-group">
                   <label htmlFor="stateOfOrigin">State of Origin </label>
                    <input className="form-control rounded-0" id="stateOfOrigin" value={stateName} readOnly/>
                </div>
               <div className="col-md-5 form-group">
                   <label htmlFor="deptZoneCommand"> Department/Zone/Command </label>
                    <input className="form-control rounded-0" id="stateOfOrigin" value={deptZoneCommand} readOnly/>
                </div>
                <div className="col-md-6 form-group">
                    <label htmlFor="localGovernmentArea"> Local Governement Area</label>
                    <input className="form-control rounded-0" id="localGovernmentArea" value={lgaName} readOnly/>
                </div>

                <div className="col-md-6 form-group">
                    <label> Date of Birth</label>
                    <input type="text" name="" className="form-control rounded-0" />
                </div>
                <div className="col-md-6 form-group">
                    <label> Date of Enlistment </label>
                    <input type="text" name="" className="form-control rounded-0" value={dateOfEnlistment} readOnly/>
                </div>
                <div className="col-md-6 form-group">
                    <label>Rank on Enlistment </label>
                    <input className="form-control rounded-0" value={rankOnEnlistment} readOnly/>
                </div>

                <div className="col-md-3 form-group">
                    <label>Discipline </label>
                    <input type="text" name="" className="form-control rounded-0" value={discipline} readOnly/>
                </div>
                <div className="col-md-4 form-group">
                    <label> What is your Official Duty. </label>
                    <input name="" className="form-control rounded-0" value={specialDuties} readOnly/>
                </div>

                 <div className="col-md-5 form-group">
                    <label> Are you on Secondment. </label>
                    <input name="" className="form-control rounded-0" value={secondmentValue} readOnly/>
                </div>
              </div>
            </div>
        </div>)}
    </div>
  )
}

export default PersonalInformationSlip
