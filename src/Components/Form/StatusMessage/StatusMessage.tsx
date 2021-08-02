import React, { FC } from 'react'

interface propsTypes {
    message: {
        success: any;
        error: string;
        loading: boolean;
                    }
}
const StatusMessage:FC<propsTypes> = ({ message }) => {
  return (
        <div>
            <div className={message?.loading === true ? "text-danger d-inline-block" : "d-none"}>
                verifying...<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            </div>
            {message?.success &&
            (<div className=" d-inline-block text-success">
                Verified<span className="fa fa-check" role="status" aria-hidden="true"></span>
            </div>)}
            {message?.error &&
            (<div className="text-danger" >
                invalid<span className="fa fa-times" role="status" aria-hidden="true"></span>
            </div>)}
        </div>
  )
}

export default StatusMessage
