import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBeKHzdS6bkLDfMLN-Db9pZDIwzo561UDk",
  authDomain: "crown-db-447fb.firebaseapp.com",
  databaseURL: "https://crown-db-447fb.firebaseio.com",
  projectId: "crown-db-447fb",
  storageBucket: "crown-db-447fb.appspot.com",
  messagingSenderId: "982968253696",
  appId: "1:982968253696:web:6513847ce6e8529e37c7e5",
  measurementId: "G-XB0L4RLYQV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
