import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyApEAmlK7uIVa45ljmrZOZVvrMJOWOpp_o",
    authDomain: "memorygallery-fb18d.firebaseapp.com",
    projectId: "memorygallery-fb18d",
    storageBucket: "memorygallery-fb18d.appspot.com",
    messagingSenderId: "725870597138",
    appId: "1:725870597138:web:7a2fa01b6ddb0c47f1f4cb"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
    firebase,
};

  