import Firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBtXYZNLqgblyohmLb7eyTpusnHVI7xRxg",
    authDomain: "rnchat-25e67.firebaseapp.com",
    databaseURL: "https://rnchat-25e67.firebaseio.com",
    projectId: "rnchat-25e67",
    storageBucket: "rnchat-25e67.appspot.com",
    messagingSenderId: "128149654785",
    appId: "1:128149654785:web:ecb6995787d23ef6"
  };
  // Initialize Firebase
  let app = Firebase.initializeApp(firebaseConfig);
  export const db = app.database()