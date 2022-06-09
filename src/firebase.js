import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCVXgXbeyWKebvg5w63VG6VJtVbzS9yVUA",
    authDomain: "facebook-clone-5d009.firebaseapp.com",
    databaseURL: "https://facebook-clone-5d009.firebaseio.com",
    projectId: "facebook-clone-5d009",
    storageBucket: "facebook-clone-5d009.appspot.com",
    messagingSenderId: "641411136655",
    appId: "1:641411136655:web:7dc1c95edaae2017c604fa",
    measurementId: "G-W42WDS57Q5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;