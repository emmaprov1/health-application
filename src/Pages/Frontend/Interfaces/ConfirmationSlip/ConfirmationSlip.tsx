import React, { useEffect, useState } from 'react'
import { Toast } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { Loader } from '../../../../Components'
import userService from '../../../../Services/userService'
import { AttarchedFiles, PersonalInformationSlip, ProfilePhotoPreview, RegisterFooter, RegisterHeader } from '../../Components/Index'
import './ConfirmationSlip.scss'

const ConfirmationSlip = () => {
  const { refid } = useParams<any>()
  const [values, setValues] = useState({})

  const [loader, setLoader] = useState(false)
  const [disableStatus, setDisableStatus] = useState(false)

  async function getData () {
    setLoader(true)
    setDisableStatus(false)
    await userService.getData(refid).then((res:any) => {
      console.log(res.data())
      setValues(res.data())
      setLoader(false)
      setDisableStatus(true)
    }, error => {
      setLoader(false)
      setDisableStatus(false)
      toast.error(error, { duration: 20000, className: 'bg-danger text-white' })
    })
  }
  useEffect(() => {
    getData()
  }, [refid])

  return (
      <div className="register-main">
        <RegisterHeader></RegisterHeader>
          <div className="container">
              <div className="register-inner">
                  <div className="spacer"></div>

                  <div className="card">
                      <div className="card-header text-center conf-head">
                          <div className="c-header-crib-2">
                              <span></span>
                              <span></span>
                              <span></span>
                          </div>
                          <h1>LHSC Application Confirmation Slip</h1>
                          <div className="c-header-crib">
                              <span></span>
                              <span></span>
                              <span></span>
                          </div>
                      </div>
                  </div>
                  {Object.keys(values).length !== 0 && values !== undefined && (<>

                    <ProfilePhotoPreview value={values} disable={disableStatus}/>
                    <PersonalInformationSlip value={values} disable={disableStatus}/>
                    <AttarchedFiles value={values} disable={disableStatus}/>
                  </>)}

                  <div className="card">
                    <div className="card-body text-center">
                    <button onClick={() => window.print()} className="btn btn-dark">Print this page</button>
                    </div>
                  </div>
              </div>
            <RegisterFooter></RegisterFooter>
        <Loader show={loader}/>
        <Toast/>
      </div>
      </div>
  )
}

export default ConfirmationSlip
