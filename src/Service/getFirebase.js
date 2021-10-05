//import firebase from 'firebase'
//import 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDtgYQwKNpfxGDhmRAwih1bt9FNQzA025E",
    authDomain: "coder-house.firebaseapp.com",
    projectId: "coder-house",
    storageBucket: "coder-house.appspot.com",
    messagingSenderId: "238174718736",
    appId: "1:238174718736:web:f0554a2db174f0c97b3395",
    measurementId: "G-QH981FWVD7"
  }


//const app = firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
/*export default function getFirestore_(){
    return firebase.firestore(app)
  }*/
  export {db}
