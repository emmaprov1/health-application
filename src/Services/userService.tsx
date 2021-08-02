import firebase from './firebaseInitService'

const userService = {

  saveRegistrationData: async (nin:string, data:{}) => {
    const db = firebase.firestore()
    return await db.collection("officers").doc(nin).set(data);
  },
  getData: async (nin:string) => {
    const db = firebase.firestore()
    return await db.collection("officers").doc(nin).get();
  }
}

export default userService
