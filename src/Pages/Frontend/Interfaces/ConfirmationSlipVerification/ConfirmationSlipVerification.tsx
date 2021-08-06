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

const ConfirmationSlipVerification = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useHistory()
  // eslint-disable-next-line no-unused-vars
  const [loader, setLoader] = useState(false)

  const onSubmit = handleSubmit((data:any) => {
    const hashRef:any = MD5(data).toString();

    setLoader(true)
    userService.getData(data.nin).then((res) => {
      // console.log("", res)
      history.push("/slip/" + hashRef)
      setLoader(false)
    }, error => {
      console.log(error.message)
      setLoader(false)
      toast.error(error.message, { duration: 4000 })
    })
  }
  );
  return (
    <div className="register-main">
      <RegisterHeader></RegisterHeader>
        <div className="container">
            <div className="register-inner">
                <div className="spacer"></div>

                <div className="card">
                    <div className="card-header text-center">
                        <div className="c-header-crib-2">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                       Confirmation Slip Printing
                        <div className="c-header-crib">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="card-body">
                      <form onSubmit={onSubmit}>
                        <div className="form-group">
                          <label>NIN number</label>
                        <input className="form-control" {...register("nin", { required: true })}></input>
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
          <RegisterFooter></RegisterFooter>
          <Loader show={loader}/>
          <Toaster/>
    </div>
  )
}

export default ConfirmationSlipVerification
