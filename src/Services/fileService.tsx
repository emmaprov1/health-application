
import { UPLOAD_ERROR, UPLOAD_PROGRESS, UPLOAD_PROGRESS_MESSAGE } from '../Constants/FileConstants';

import firebase from './firebaseInitService'

const fileService = {
  uploadImage: async (file:any, fileType:string, userNin:any) => {
    const metadata = {
      contentType: "image/jpeg"
    };
    const filePath = `${userNin}/${fileType}/${fileType}_${file[0].name}`

    return await firebase.storage().ref().child(filePath).put(file[0], metadata)
      .then((snapshot) => {
        console.log(snapshot)
        return snapshot.ref.getDownloadURL()
      });

    // return storageLinkage.snapshot.ref.getDownloadURL()
    //   .then((remoteURL: any) => ({
    //     remoteURL,
    //     name: file[0].name,
    //     size: (file[0].size / 1048576).toFixed(2),
    //     fileType
    //   }))
  },

  uploadImageWithProgress: async (file:any, fileType:string, dispatcher:any, userNin:number) => {
    const metadata = {
      contentType: "image/jpeg"
    };

    const storageRef = firebase.storage().ref().child(`${userNin}/${fileType}/${fileType}_${file[0].name}`)
    const storageRefers = storageRef.put(file[0], metadata)
    // const storager = await storageRefers.snapshot.ref;

    // Listen for state changes, errors, and completion of the upload.
    storageRefers.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        dispatcher({ type: UPLOAD_PROGRESS, data: { [fileType]: progress } })

        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            dispatcher({ type: UPLOAD_PROGRESS_MESSAGE, data: { [fileType]: 'Upload is paused' } })
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            dispatcher({ type: UPLOAD_PROGRESS_MESSAGE, data: { [fileType]: 'Upload is running' } })
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            dispatcher({ type: UPLOAD_ERROR, data: { [fileType]: 'Unauthorise access' } })
            break;
          case 'storage/canceled':
            // User canceled the upload
            dispatcher({ type: UPLOAD_ERROR, data: { [fileType]: 'Upload hault by user' } })
            break;
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            dispatcher({ type: UPLOAD_ERROR, data: { [fileType]: 'Unknown error occurred' } })
            break;
        }
      }
    );

    // Upload completed successfully, now we can get the download URL
    return await storageRefers.snapshot.ref.getDownloadURL().then((remoteURL) => (
      {
        remoteURL,
        name: file[0].name,
        size: (file[0].size / 1048576).toFixed(2),
        fileType
      }
    ));
  },

  uploadBase64: async (file: string, name: string, token: any) => {
    const metadata = {
      contentType: "image/png"
    };
    const reName = name + '.png'
    const storageRef = firebase.storage().ref().child(`qrcodes/${token}/${reName}`)

    await storageRef.putString(file, 'data_url', metadata)

    return await storageRef.getDownloadURL().then((downloadURL: any) => (downloadURL))
  },

  deleteFile: async (file:any) => {
    // Create a reference to the file to delete
    return await firebase.storage().ref().child(file).delete();
  }
}

export default fileService
