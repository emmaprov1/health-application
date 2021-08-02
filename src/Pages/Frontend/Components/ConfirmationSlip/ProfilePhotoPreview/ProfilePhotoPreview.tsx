import React, { FC } from 'react'
import emptyAvarter from "./../../../../../Assets/images/user-empty-avatar.png";
interface propsType {
    value: any;
    disable: boolean;
}

const ProfilePhotoPreview:FC<propsType> = ({ value, disable }) => {
  const { profilePhotoNin, profilePhoto } = value

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

        {disable &&
        (<div className="card-body">
          <div className="container">
              <div className="row h-100">
                  <div className="col-md-6 text-center">
                      <div>
                          <img src={`data:image/png;base64,${profilePhotoNin}`} alt="" className="w-50"/>
                      </div>
                  </div>
                  <div className="col-md-6 text-center">
                      <div>
                          <img src={profilePhoto || emptyAvarter} alt="" className="w-50"/>
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
