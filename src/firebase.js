import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDCWrwliDPimOOVQtuj2gTCvJ3h_nWmb4",
  authDomain: "challenge-789ed.firebaseapp.com",
  projectId: "challenge-789ed",
  storageBucket: "challenge-789ed.appspot.com",
  messagingSenderId: "109276200582",
  appId: "1:109276200582:web:806a38a7584070054c1b07",
  measurementId: "G-755RVRKFWG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };