import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/storage'
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyDU_5mNo8kDkhSa-Km4yB_4LkaWuKucBEc",
  authDomain: "poarms-58678.firebaseapp.com",
  databaseURL: "https://poarms-58678.firebaseio.com",
  projectId: "poarms-58678",
  storageBucket: "poarms-58678.appspot.com",
  messagingSenderId: "24343735708",
  appId: "1:24343735708:web:adb017b10ab8a973322c59",
  measurementId: "G-CLJD9ZGKFL"
}

firebase.initializeApp(firebaseConfig)
export default firebase
