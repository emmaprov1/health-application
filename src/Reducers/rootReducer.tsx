import { combineReducers } from 'redux';
import { disableStatusReducer, UploadProgressReducer, UploadStorageReducer } from '.';
import UploadMessageReducer from './FileManager/UploadMessageReducer';
import referenceReducer from './Verification/referenceReducer';

const rootReducer = combineReducers({
  uploadProgress: UploadProgressReducer,
  uploadMessage: UploadMessageReducer,
  uploadedFiles: UploadStorageReducer,
  reference: referenceReducer,
  disableStatus: disableStatusReducer
});

export default rootReducer;
