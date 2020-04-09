import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = firebase.initializeApp({
  apiKey: "AIzaSyCd1Zonnf008X8NKLOr496CllAdsiP1_lQ",
  authDomain: "auth-cordova.firebaseapp.com",
  databaseURL: "https://auth-cordova.firebaseio.com",
  projectId: "auth-cordova",
  storageBucket: "auth-cordova.appspot.com",
  messagingSenderId: "421216793407",
  appId: "1:421216793407:android:c29a8548257123dd98d98a",
});

const auth = firebase.auth();
const db = config.firestore();

export { auth, db, firebase };
