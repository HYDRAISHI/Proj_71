import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCN0lNiEm6d-C3nXTQTkzxDDMACmUrL89c",
    authDomain: "e-ride-3fc3a.firebaseapp.com",
    projectId: "e-ride-3fc3a",
    storageBucket: "e-ride-3fc3a.appspot.com",
    messagingSenderId: "402291848806",
    appId: "1:402291848806:web:1135900840ed6910065fa7"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


