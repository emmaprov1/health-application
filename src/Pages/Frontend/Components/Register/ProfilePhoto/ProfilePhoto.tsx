import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UPLOADED_FILES } from '../../../../../Constants/FileConstants';
import { useNin } from '../../../../../Hooks';
import fileService from '../../../../../Services/fileService';
// import { useDispatch, useSelector } from 'react-redux'
// import { UPLOADED_FILES } from '../../../../../Constants/FileConstants'
// import fileService from '../../../../../Services/fileService'
import emptyAvarter from "./../../../../../Assets/images/user-empty-avatar.png";
interface propsType {
    register: any;
    errors: any;
    handleChange: any;
    value: any
}
const initialData = { fileType: "", name: "", remoteURL: "" }

const ProfilePhoto:FC<propsType> = ({ register, errors, handleChange, value }) => {
  const { profilePhotoNin } = value
  const dispatcher = useDispatch()
  const userNin = useNin()
  // eslint-disable-next-line no-unused-vars
  const { uploadedFiles, disableStatus, uploadProgress } = useSelector((state:any) => state)

  const [uploaded, setUploaded] = useState(initialData)
  const storedFiles: string[] = uploadedFiles

  const uploadImage = async (event: { target: { files: any; }; }) => {
    const file = event.target.files
    const fileType = "profilePhoto"

    await fileService.uploadImage(file, fileType, dispatcher, userNin.nin).then((res:any) => {
      setUploaded(res)
      dispatcher({ type: UPLOADED_FILES, data: [...storedFiles, res] })
    }, error => {
      console.log(error.message)
    })
  }

  const deletFile = async (data:string) => {
    alert(data)
    await fileService.deleteFile(data).then((res) => {
      return res
    }, error => {
      console.log(error.message)
    })
  }
  return (
    <div className="card">
        <div className="card-header">
            <div className="c-header-crib-2">
                <span></span>
                <span></span>
                <span></span>
            </div>
            Profile Photo
            <div className="c-header-crib">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        {!disableStatus &&
        (<div className="card-body">
          <div className="container">
              <div className="row h-100">
                  <div className="col-md-6 text-center">
                      <div>
                          <img src={`data:image/png;base64,${profilePhotoNin}`} alt="" className="w-50"/>
                      </div>
                  </div>
                  <div className="col-md-6 text-center">
                        <div className="d-block">
                            <small className="mb-5">upload photo on uniform</small><br></br>
                          <img src={uploaded?.remoteURL || emptyAvarter} alt="" className="w-50"/>
                        </div>
                        <br/>
                        <label htmlFor="profilePhoto mt-4">
                            Upload photo
                        <br/>
                            <input type="file" onChange={uploadImage}></input>
                        </label>

                    {uploaded &&
                    (uploaded?.fileType === "profilePhoto" && (
                         <span className="fa fa-check fa-1x rounded-circle p-2 bg-success text-right text-white shadow-sm" onChange={() => deletFile(`${uploaded.fileType} /${uploaded.name}`)}></span>
                    )
                    )
                    }
                  </div>
              </div>
          </div>
        </div>
        )}
    </div>
  )
}

export default ProfilePhoto
