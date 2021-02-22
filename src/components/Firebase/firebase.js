import firebase from "firebase/app";
import "firebase/storage";
import "firebase/database";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBWzklEeHNPSbH7KJiGkI19MJciWvY9oXk",
  authDomain: "andrijichouse-6e1ea.firebaseapp.com",
  databaseURL: "https://andrijichouse-6e1ea-default-rtdb.firebaseio.com",
  projectId: "andrijichouse-6e1ea",
  storageBucket: "andrijichouse-6e1ea.appspot.com",
  messagingSenderId: "255480173552",
  appId: "1:255480173552:web:44abfb1e21b402d4210335"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();
var db = firebase.database();
var fs = firebase.firestore();

export { storage, db, fs, firebase as default };