import { combineReducers } from 'redux';
import { disableStatusReducer, workExperienceReducer, UploadProgressReducer, UploadStorageReducer } from '.';
import UploadMessageReducer from './FileManager/UploadMessageReducer';
import referenceReducer from './Verification/referenceReducer';

const rootReducer = combineReducers({
  uploadProgress: UploadProgressReducer,
  uploadMessage: UploadMessageReducer,
  uploadedFiles: UploadStorageReducer,
  reference: referenceReducer,
  disableStatus: disableStatusReducer,
  workExperienceReducer: workExperienceReducer
});

export default rootReducer;
