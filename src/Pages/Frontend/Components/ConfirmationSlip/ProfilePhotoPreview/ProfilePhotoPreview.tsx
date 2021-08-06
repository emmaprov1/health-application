import React, { FC } from 'react'
import emptyAvarter from "./../../../../../Assets/images/user-empty-avatar.png";
interface propsType {
    value: any;
    disable: boolean;
}

const ProfilePhotoPreview:FC<propsType> = ({ value, disable }) => {
  // eslint-disable-next-line no-unused-vars
  const { referenceID, data } = value

  function getPhoto () {
    data.filter(function (element: { fileType: string, remoteURL:any }) {
      return element.fileType === 'profilePhoto' ? element.remoteURL : '';
    })
  }

  console.log(getPhoto)

  const myPhoto = data.find((e: { fileType: string; }) => e.fileType === "profilePhoto");
  console.log(myPhoto);
  return (
    <div className="card">
        <div className="card-header text-center">
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

        {disable &&
        (<div className="card-body">
          <div className="container">
              <div className="row h-100">
                  <div className="col-md-12 text-center">
                        <div>
                            <img src={myPhoto.remoteURL || emptyAvarter} alt="" className="w-25"/>
                        </div>
                        <div className="form-group mt-4">
                            <b>Application Reference ID: </b>
                            <div style={{ fontWeight: 400, textAlign: "center" }}>{referenceID}</div>
                        </div>
                  </div>
              </div>
          </div>
        </div>
        )}
    </div>
  )
}

export default ProfilePhotoPreview
