import React, { FC } from 'react'

interface propsType {
    value: any;
    disable: boolean;
}
const AttarchedFiles:FC<propsType> = ({ value, disable }) => {
  // eslint-disable-next-line no-unused-vars
  const { data, workworkExperience } = value

  function checkExistence (type:string) {
    return data.filter(function (element: { fileType: string }) {
      return element.fileType === type;
    }).length
  }

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
                            <div className="col-md-2 pt-2">
                            <h6>SSCE</h6>
                            {data.length > 0 && checkExistence('ssce') ? <span className="fa fa-check text-light bg-success p-1 rounded-circle"></span> : <span className="fa fa-times text-light bg-danger p-1 rounded-circle"></span>}
                            </div>
                            <div className="col-md-2 pt-2">
                            <h6>Tertiary</h6>
                            { data.length > 0 && checkExistence('tertiary') ? <span className="fa fa-check text-light bg-success p-1 rounded-circle"></span> : <span className="fa fa-times text-light bg-danger p-1 rounded-circle"></span> }
                            </div>
                            <div className="col-md-2 pt-2">
                            <h6>License Certifcate</h6>
                            {data.length > 0 && checkExistence('licenseCertifcate') ? <span className="fa fa-check text-light bg-success p-1 rounded-circle"></span> : <span className="fa fa-times text-light bg-danger p-1 rounded-circle"></span>}
                            </div>
                            <div className="col-md-2 pt-2">
                            <h6>Professional Certificate</h6>
                            {data.length > 0 && checkExistence('certificate') ? <span className="fa fa-check text-light bg-success p-1 rounded-circle"></span> : <span className="fa fa-times text-light bg-danger p-1 rounded-circle"></span>}
                            </div>
                            <div className="col-md-2 pt-2">
                            <h6>Citizenship</h6>
                            {data.length > 0 && checkExistence('citizenship') ? <span className="fa fa-check text-light bg-success p-1 rounded-circle"></span> : <span className="fa fa-times text-light bg-danger p-1 rounded-circle"></span>}
                            </div>
                            <div className="col-md-2 pt-2">
                            <h6>Valid ID</h6>
                            {data.length > 0 && checkExistence('identity') ? <span className="fa fa-check text-light bg-success p-1 rounded-circle"></span> : <span className="fa fa-times text-light bg-danger p-1 rounded-circle"></span>}
                            </div>
                            <div className="col-md-2 pt-2">
                            <h6>NYSC certificate</h6>
                            {data.length > 0 && checkExistence('nysc') ? <span className="fa fa-check text-light bg-success p-1 rounded-circle"></span> : <span className="fa fa-times text-light bg-danger p-1 rounded-circle"></span>}
                            </div>
                            <div className="col-md-2 pt-2">
                            <h6>Resume</h6>
                            {data.length > 0 && checkExistence('resume') ? <span className="fa fa-check text-light bg-success p-1 rounded-circle"></span> : <span className="fa fa-times text-light bg-danger p-1 rounded-circle"></span>}
                            </div>
                            <div className="col-md-2 pt-2">
                            <h6>Work experience</h6>
                            {data.length > 0 && workworkExperience.length > 0 ? <span className="fa fa-check text-light bg-success p-1 rounded-circle"></span> : <span className="fa fa-times text-light bg-danger p-1 rounded-circle"></span>}
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
