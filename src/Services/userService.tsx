import firebase from './firebaseInitService'

const userService = {

  saveRegistrationData: async (refId:string, data:{}) => {
    const db = firebase.firestore()
    return await db.collection("applications").doc(refId).set(data);
  },
  getData: async (nin:string) => {
    const db = firebase.firestore()
    return await db.collection("applications").doc(nin).get();
  },
  validateEmail: async (email:string) => {
    const db = firebase.firestore()
    return await db.collection("applications")
      .where("email", "==", email)
      .where("email2", "==", email).get();
  },
  validatePhone: async (phone:number) => {
    const db = firebase.firestore()
    return await db.collection("applications")
      .where("phoneNo", "==", phone)
      .where("phoneNo2", "==", phone)
      .get();
  }
}

export default userService
