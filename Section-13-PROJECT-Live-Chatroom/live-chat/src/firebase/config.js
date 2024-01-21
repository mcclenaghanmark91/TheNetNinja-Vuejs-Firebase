import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB8O8xGPoc4i7AEFRNyQpw1BnP6n9rtKOc",
    authDomain: "udemy-vue-firebase-sites-8e549.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-8e549",
    storageBucket: "udemy-vue-firebase-sites-8e549.appspot.com",
    messagingSenderId: "216408098491",
    appId: "1:216408098491:web:c17681e9fa3df890488b9e"
  }

//init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }