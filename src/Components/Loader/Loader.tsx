import React, { FC } from 'react'
import "./Loader.scss";

interface propstype {
  show: boolean
}

const Loader:FC<propstype> = ({ show }) => {
  return (
        <div className={show ? "loader" : "loader d-none" }>
            <div className="row h-100">
                <div className="col-md-12 my-auto">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Loader
