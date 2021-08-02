import React, { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VerificationAction from '../../../../../Actions/VerificationAction/VerificationAction'
import { StatusMessage } from '../../../../../Components'
import { DISABLE_STATUS } from '../../../../../Constants/FormActivitiesConstant'
 interface propsType {
    register: any;
    errors: any;
    handleChange: any;
    value: any
}
const OfficerVerification:FC<propsType> = ({ register, errors, handleChange, value }) => {
  const { apNumber, nin, employerCode } = value
  const dispatcher = useDispatch()
  const { ninVerification } = useSelector((state:any) => state)

  const getMyNin = useCallback((nin) => {
    dispatcher(VerificationAction.ninVerify(nin))
  }, [])

  if (ninVerification.success && !ninVerification.loading) {
    dispatcher({ type: DISABLE_STATUS, data: false })
  }
  const verifyNin = async (e:any) => {
    const nin = e.target.value
    if (nin.toString().length === 11) {
      getMyNin(nin)
    } else {
      dispatcher({ type: DISABLE_STATUS, data: true })
    }
  }

  return (

        <div className="card">
        <div className="card-header">
            <div className="c-header-crib-2">
                <span></span>
                <span></span>
                <span></span>
            </div>
            Officer Verification
            <div className="c-header-crib">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className="card-body">
            <div className="container w-50">
                <div className="form-group">
                   <div className="form-group">
                        <label> AP/F No: </label>
                        <input type="text" name="" className="form-control rounded-0"
                            {...register("apNumber")} value={apNumber}
                            onChange={handleChange}
                            aria-invalid={errors.apNumber ? "true" : "false"}
                            // disabled={true}
                        />
                     {/* {apVerification && (<StatusMessage message={ninVerification}></StatusMessage>) } */}
                    </div>
                    <div className="register--error text-danger">
                        {errors.apNumber && errors.apNumber.message}
                    </div>
                </div>
                {/* 56221327274 */}
                <div className="form-group">
                    <label> NIN: </label>
                    <input type="number" name="" className="form-control rounded-0"
                    {...register("nin", {
                      required: "NIN number field cannot be empty",
                      pattern: /^[0-9]/,
                      minLength: {
                        value: 11,
                        message: 'Max length is 11',
                      },
                      maxLength: {
                        value: 11,
                        message: 'Max length is 11',
                      }
                    })}
                    aria-invalid={errors.nin ? "true" : "false"}
                    value={nin} onChange={(e) => { handleChange(e); verifyNin(e); }}/>

                    {ninVerification && (<StatusMessage message={ninVerification}></StatusMessage>) }

                    <div className="register--error text-danger">
                        {errors.nin && errors.nin.message}
                    </div>
                </div>

                <div className="form-group">
                    <label> Employer Code: </label>
                    <input type="text" name="" className="form-control rounded-0"
                    {...register("employerCode")}
                    value={employerCode}
                    onChange={handleChange}
                    aria-invalid={errors.employerCode ? "true" : "false"}
                    // disabled={true}
                    />
                    {/* <StatusMessage message={ninVerification}></StatusMessage> */}
                    <div className="register--error text-danger">
                        {errors.employerCode && errors.employerCode.message}
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default OfficerVerification
