import firebase from './firebaseInitService'

const authService = {

  createUserAccount: (data:any) => {
    return firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
  },

  createUserDetail: async (data: firebase.firestore.DocumentData) => {
    const db = firebase.firestore();
    console.log(data)
    return await db.collection('users').add(data);
  },

  loginUser: (data: { email: any; password: any; }) => {
    return firebase.auth().signInWithEmailAndPassword(data.email, data.password)
  },

  logoutUser: () => {
    return firebase.auth().signOut()
  },

  PasswordReset: (data: { email: any; }) => {
    return firebase.auth().sendPasswordResetEmail(data.email)
  },

  getAuth: (data: { email: any; }) => {
    return firebase.auth().sendPasswordResetEmail(data.email)
  },

  getUser: async (uid: any) => {
    const db = firebase.firestore();
    return await db.collection('_users').doc(uid).get()
    // where('uid', '==', uid).get()
  },

  updateUser: async (data: any) => {
    const db = firebase.firestore();
    const uid = await firebase.auth().currentUser?.uid
    console.log(uid)
    return db.collection('_users').doc(uid).set({ ...data, uid });

    // const userObj = await db.collection('_users').where('uid', '==', uid).get()

    // if (userObj.docs.length === 0) {
    //   return await db.collection('_users').add({ ...data, uid });
    // } else {
    //   userObj.docs.forEach((user: { id: any; }) => {
    //     return db.collection('_users').doc(user.id).update({ ...data, uid });
    //   })
    // }
  },

  ClientPasswordReset: (data: { email: any; }) => {
    return firebase.auth().sendPasswordResetEmail(data.email)
  }
}

// function ClientException (this: any, message: string) {
//   this.message = message;
//   this.name = 'ClientException';
// }

export default authService
