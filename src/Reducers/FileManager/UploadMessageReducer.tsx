
import { UPLOAD_ERROR, UPLOAD_PROGRESS_MESSAGE } from '../../Constants/FileConstants';

const UploadMessageReducer = (state = {}, action: { type: any; data: any; }) => {
  switch (action.type) {
    case UPLOAD_PROGRESS_MESSAGE:
      return action.data
    case UPLOAD_ERROR:
      return action.data
    default:
      return state
  }
}

export default UploadMessageReducer;
