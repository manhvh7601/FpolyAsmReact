import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEewHRd2z41n67WpCnt2mGw-WBu3IFYcs",
  authDomain: "upload-image-reactjs.firebaseapp.com",
  projectId: "upload-image-reactjs",
  storageBucket: "upload-image-reactjs.appspot.com",
  messagingSenderId: "369028066044",
  appId: "1:369028066044:web:5355faa4f3cef7e7bc0579",
  measurementId: "G-4EZMFKPZGD",
};

firebase.initializeApp(firebaseConfig);


export default firebase;