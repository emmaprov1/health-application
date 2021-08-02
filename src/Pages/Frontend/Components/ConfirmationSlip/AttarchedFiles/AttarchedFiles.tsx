import React, { FC } from 'react'

interface propsType {
    value: any;
    disable: boolean;
}
const AttarchedFiles:FC<propsType> = ({ value, disable }) => {
  const { promotion, profession, lawyer, seminar, service, ssce, tertiary, workTransfer, workshop } = value
  console.log(value)
  return (
        <div>
            <div className="card">
                <div className="card-header">
                    <div className="c-header-crib-2">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    Uploaded Documents
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
                            <div className="col-md">
                            <h6>Promotion</h6>
                            {promotion.length > 0 ? <span className="fa fa-check text-light bg-success p-1 rounded-circle"></span> : <span className="fa fa-times text-light bg-danger p-1 rounded-circle"></span>}
                            </div>
                            <div className="col-md">
                            <h6>Profession</h6>
                            { profession.length > 0 ? <span className="fa fa-check text-light bg-success p-1 rounded-circle"></span> : <span className="fa fa-times text-light bg-danger p-1 rounded-circle"></span> }
                            </div>
                            <div className="col-md">
                            <h6>Lawyer</h6>
                            {lawyer.length > 0 ? <span className="fa fa-check text-light bg-success p-1 rounded-circle"></span> : <span className="fa fa-times text-light bg-danger p-1 rounded-circle"></span>}
                            </div>
                            <div className="col-md">
                            <h6>Seminar</h6>
                            {seminar.length > 0 ? <span className="fa fa-check text-light bg-success p-1 rounded-circle"></span> : <span className="fa fa-times text-light bg-danger p-1 rounded-circle"></span>}
                            </div>
                            <div className="col-md">
                            <h6>Service</h6>
                            {service.length > 0 ? <span className="fa fa-check text-light bg-success p-1 rounded-circle"></span> : <span className="fa fa-times text-light bg-danger p-1 rounded-circle"></span>}
                            </div>
                            <div className="col-md">
                            <h6>SSCE</h6>
                            {ssce.length > 0 ? <span className="fa fa-check text-light bg-success p-1 rounded-circle"></span> : <span className="fa fa-times text-light bg-danger p-1 rounded-circle"></span>}
                            </div>
                            <div className="col-md">
                            <h6>Tertiary</h6>
                            {tertiary.length > 0 ? <span className="fa fa-check text-light bg-success p-1 rounded-circle"></span> : <span className="fa fa-times text-light bg-danger p-1 rounded-circle"></span>}
                            </div>
                            <div className="col-md">
                            <h6>WorkTransfer</h6>
                            {workTransfer.length > 0 ? <span className="fa fa-check text-light bg-success p-1 rounded-circle"></span> : <span className="fa fa-times text-light bg-danger p-1 rounded-circle"></span>}
                            </div>
                            <div className="col-md">
                            <h6>Workshop</h6>
                            {workshop.length > 0 ? <span className="fa fa-check text-light bg-success p-1 rounded-circle"></span> : <span className="fa fa-times text-light bg-danger p-1 rounded-circle"></span>}
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
  )
}

export default AttarchedFiles
