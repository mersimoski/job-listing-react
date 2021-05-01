import app from 'firebase/app'
import'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA8uc4rflEdQ9Q4NL8eHtGiJoTQ0z1-vu0",
    authDomain: "job-listing-reactjs.firebaseapp.com",
    projectId: "job-listing-reactjs",
    storageBucket: "job-listing-reactjs.appspot.com",
    messagingSenderId: "698157246149",
    appId: "1:698157246149:web:8749cfb830a91028ebf2ac",
    measurementId: "G-M469Z295D3"
  };
  const firebase = app.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();

  export { firebase, firestore, app};