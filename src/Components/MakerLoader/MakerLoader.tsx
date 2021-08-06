import React, { FC } from 'react'
import "./MakerLoader.scss";

interface propstype {
  show: boolean
}

const MakerLoader:FC<propstype> = ({ show }) => {
  return (
        <div className={show ? "loader" : "loader d-none" }>
            <div className="row h-100">
                <div className="col-md-12 my-auto">
                    <div className="d-flex justify-content-center align-items-center">
                        <img src="https://i.pinimg.com/originals/4f/97/1b/4f971b0d6bacdd50c85333a2af80ddaf.gif" className="w-25"></img>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default MakerLoader
