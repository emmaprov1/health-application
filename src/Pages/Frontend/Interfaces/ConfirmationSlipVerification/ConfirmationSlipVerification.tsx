import React, { useState } from "react";
import { useForm } from "react-hook-form";
// eslint-disable-next-line no-unused-vars
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { Loader } from "../../../../Components";
// eslint-disable-next-line no-unused-vars
import userService from "../../../../Services/userService";
import { RegisterFooter, RegisterHeader } from "../../Components/Index";
import "./ConfirmationSlipVerification.scss"
import MD5 from 'crypto-js/md5'
import { EmailValidator, PhoneValidator } from "../../../../Helpers";
import { Renderable, ValueFunction, Toast } from "react-hot-toast/dist/core/types";

const ConfirmationSlipVerification = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useHistory()
  // eslint-disable-next-line no-unused-vars
  const [loader, setLoader] = useState(false)

  const onSubmit = handleSubmit((data:any) => {
    const hashRef:any = MD5(data.refId).toString();
    setLoader(true)

    switch (true) {
      case PhoneValidator(data.refId):
        SlipValidation.phoneValidation(data.refId)
        break;
      case EmailValidator(data.refId):
        SlipValidation.emailValidation(data.refId)
        break;
      default:
        SlipValidation.refValidation(hashRef)
    }
  }
  );

  const SlipValidation = {
    phoneValidation: (data:any) => {
      userService.getDataByPhone(data).then((res:any) => {
        if (res.docs.length > 0) {
          history.push("/slip/" + MD5(res.docs[0].data().referenceID).toString())
        } else {
          setLoader(false)
          toast.error("Phone doesn't exist", { duration: 4000 })
        }
      }, (error: { message: Renderable | ValueFunction<Renderable, Toast>; }) => {
        console.log(error.message)
        setLoader(false)
        toast.error(error.message, { duration: 4000 })
      })
    },

    emailValidation: (data:string) => {
      userService.getDataByEmail(data).then((res:any) => {
        if (res.docs.length > 0) {
          history.push("/slip/" + MD5(res.docs[0].data().referenceID).toString())
        } else {
          setLoader(false)
          toast.error("Email doesn't exist", { duration: 4000 })
        }
      }, (error: { message: Renderable | ValueFunction<Renderable, Toast>; }) => {
        console.log(error.message)
        setLoader(false)
        toast.error(error.message, { duration: 4000 })
      })
    },

    refValidation: (hashRef:any) => {
      userService.getData(hashRef).then((res:any) => {
        if (res.data()) {
          history.push("/slip/" + hashRef)
        } else {
          setLoader(false)
          toast.error("Reference id doesn't exist", { duration: 4000 })
        }
      }, (error: { message: Renderable | ValueFunction<Renderable, Toast>; }) => {
        console.log(error.message)
        setLoader(false)
        toast.error(error.message, { duration: 4000 })
      })
    }
  }

  return (
    <div className=" slip-confirmation h-100">
      <RegisterHeader></RegisterHeader>
        <div className="container">
            <div className="register-inner">
                <div className="spacer"></div>

                 <div className="row">
                   <div className="col-md-6 offset-md-3">
                   <div className="card mt-5">
                    <div className="card-header text-center">
                        <div className="c-header-crib-2">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                       <h5>Confirmation Slip Printing</h5>
                        <div className="c-header-crib">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="card-body">
                      <form onSubmit={onSubmit}>
                        <div className="form-group">
                          <label>Reference ID/Phone/Email</label>
                        <input className="form-control" {...register("refId", { required: true })}></input>
                        <div className="register--error text-danger">
                        {errors.nin && "invalid input"}
                    </div>
                        </div>
                        <div className="form-group text-center">
                        <button className="btn btn-outline-success">Print slip</button>
                        </div>
                      </form>
                    </div>
                </div>
              </div>
            </div>
          </div>
    </div>
    <div className="fixed-bottom">
      <RegisterFooter></RegisterFooter>
      </div>
      <Loader show={loader}/>
      <Toaster/>
    </div>
  )
}

export default ConfirmationSlipVerification
