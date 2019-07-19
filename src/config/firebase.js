import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var firebaseConfig = {
  apiKey: "AIzaSyABD9YqCrMVfzhR_uNhtajGRPfSw2ql3CQ",
  authDomain: "react-slack-app-76657.firebaseapp.com",
  databaseURL: "https://react-slack-app-76657.firebaseio.com",
  projectId: "react-slack-app-76657",
  storageBucket: "react-slack-app-76657.appspot.com",
  messagingSenderId: "493630268167",
  appId: "1:493630268167:web:bbc8a1219d9f38bf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;