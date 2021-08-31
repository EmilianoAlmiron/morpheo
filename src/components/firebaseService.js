import firebase from "firebase"
import "firebase/firestore"




const firebaseConfig = {
    apiKey: "AIzaSyCEdS0e1WF2FCDPlDu4GdHOmKlpJp6CsRU",
    authDomain: "morpheo-a9b8f.firebaseapp.com",
    projectId: "morpheo-a9b8f",
    storageBucket: "morpheo-a9b8f.appspot.com",
    messagingSenderId: "427735607640",
    appId: "1:427735607640:web:5c5c77be329c5d72c3dd2d"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}