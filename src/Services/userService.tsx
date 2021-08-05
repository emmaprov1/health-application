import firebase from './firebaseInitService'

const userService = {

  saveRegistrationData: async (refId:string, data:{}) => {
    const db = firebase.firestore()
    return await db.collection("applications").doc(refId).set(data);
  },
  getData: async (nin:string) => {
    const db = firebase.firestore()
    return await db.collection("applications").doc(nin).get();
  }
}

export default userService
