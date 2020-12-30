import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBraj7pOMJCO_ee0KHsGx7EXCSiIpD4ROE",
    authDomain: "memory-gallery-4.firebaseapp.com",
    projectId: "memory-gallery-4",
    storageBucket: "memory-gallery-4.appspot.com",
    messagingSenderId: "118092518721",
    appId: "1:118092518721:web:7a530d67b0af9f7ae73dc0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default {
      Firebase,
  };