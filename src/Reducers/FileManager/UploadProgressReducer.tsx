
import { UPLOAD_PROGRESS } from '../../Constants/FileConstants';

const UploadProgressReducer = (state = {}, action: { type: any; data: any; }) => {
  switch (action.type) {
    case UPLOAD_PROGRESS:
      return action.data
    default:
      return state
  }
}

export default UploadProgressReducer;
