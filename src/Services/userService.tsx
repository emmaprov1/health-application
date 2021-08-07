import firebase from './firebaseInitService'

const userService = {

  saveRegistrationData: async (refId:string, data:{}) => {
    const db = firebase.firestore()
    return await db.collection("recruitment").doc(refId).set(data);
  },

  getData: async (ref:string) => {
    const db = firebase.firestore()
    return await db.collection("recruitment").doc(ref).get();
  },

  getDataByEmail: async (email:string) => {
    const db = firebase.firestore()
    return await db.collection("recruitment").where("email", "==", email).get();
  },

  getDataByPhone: async (phone:number) => {
    const db = firebase.firestore()
    return await db.collection("recruitment").where("phoneNo", "==", phone).get();
  },

  validateEmail: async (email:string) => {
    const db = firebase.firestore()
    return await db.collection("recruitment")
      .where("email", "==", email)
      .where("email2", "==", email).get();
  },

  validatePhone: async (phone:number) => {
    const db = firebase.firestore()
    return await db.collection("recruitment")
      .where("phoneNo", "==", phone)
      .where("phoneNo2", "==", phone)
      .get();
  }
}

export default userService
