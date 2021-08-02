import { combineReducers } from 'redux';
import { disableStatusReducer, ninReducer, UploadProgressReducer, UploadStorageReducer } from '.';
import UploadMessageReducer from './FileManager/UploadMessageReducer';

const rootReducer = combineReducers({
  uploadProgress: UploadProgressReducer,
  uploadMessage: UploadMessageReducer,
  uploadedFiles: UploadStorageReducer,
  ninVerification: ninReducer,
  disableStatus: disableStatusReducer
});

export default rootReducer;
