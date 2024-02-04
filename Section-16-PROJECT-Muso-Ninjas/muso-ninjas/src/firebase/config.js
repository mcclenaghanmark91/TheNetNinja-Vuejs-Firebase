import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD2-PjzwZZfi5DVv2yDGT66JWnWZxNDrbQ",
    authDomain: "muso-ninjas-c843b.firebaseapp.com",
    projectId: "muso-ninjas-c843b",
    storageBucket: "muso-ninjas-c843b.appspot.com",
    messagingSenderId: "327034706440",
    appId: "1:327034706440:web:81ad468f393df6e0c1cfbd"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }