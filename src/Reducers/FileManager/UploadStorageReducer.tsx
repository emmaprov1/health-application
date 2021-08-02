
import { UPLOADED_FILES } from '../../Constants/FileConstants';

const UploadStorageReducer = (state = [], action: any) => {
  switch (action.type) {
    case UPLOADED_FILES:
      return action.data
    default:
      return state
  }
}

export default UploadStorageReducer;
