
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DISABLE_STATUS } from '../../../../../Constants/FormActivitiesConstant'
 interface propsType {
    value: any;
    disable: boolean;
}
const OfficerVerificationSlip:FC<propsType> = ({ value, disable }) => {
  // eslint-disable-next-line no-unused-vars
  const { apNumber, nin, employerCode } = value
  const dispatcher = useDispatch()
  const { ninVerification } = useSelector((state:any) => state)

  if (ninVerification.success && !ninVerification.loading) {
    dispatcher({ type: DISABLE_STATUS, data: false })
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
        {disable === true && (
        <div className="card-body">
            <div className="container w-50">
                <div className="form-group">
                   <div className="form-group">
                        <label> AP/F No: </label>
                        <input type="text" name="" className="form-control rounded-0" value={apNumber}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label> NIN: </label>
                    <input type="number" name="" className="form-control rounded-0" value={nin}/>

                </div>

                <div className="form-group">
                    <label> Employer Code: </label>
                    <input type="text" name="" className="form-control rounded-0"
                    />
                </div>
            </div>
        </div>)}
    </div>

  )
}

export default OfficerVerificationSlip
