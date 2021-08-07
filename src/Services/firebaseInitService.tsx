import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/storage'
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCLdIb9Z3PE-ZFgRviuS16D93E6Ylrlp9o",
  authDomain: "lshsc-ae41e.firebaseapp.com",
  databaseURL: "https://lshsc-ae41e.firebaseio.com",
  projectId: "lshsc-ae41e",
  storageBucket: "lshsc-ae41e.appspot.com",
  messagingSenderId: "5477673313",
  appId: "1:5477673313:web:fcb00924ba4816be597d20",
  measurementId: "G-28PV3E2DSP"
}

firebase.initializeApp(firebaseConfig)
export default firebase
