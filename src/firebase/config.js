import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBhxdyhnRBsd8XLok8R4UzrKGen6qcchmQ",
  authDomain: "udemy-vue-firebase-sites-a007e.firebaseapp.com",
  databaseURL: "https://udemy-vue-firebase-sites-a007e.firebaseio.com",
  projectId: "udemy-vue-firebase-sites-a007e",
  storageBucket: "udemy-vue-firebase-sites-a007e.appspot.com",
  messagingSenderId: "870723105589",
  appId: "1:870723105589:web:dec8df630e7e109ae8527c"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }