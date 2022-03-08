import { initializeApp } from "firebase/app" ;     
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged } from "firebase/auth";
const firebaseConfig = { 
    apiKey : "AIzaSyA8Z2QpHFfxqWcLqmgOCi7LXQE4-hGdm9E" , 
    authDomain : "challenge-ab023.firebaseapp.com" , 
    databaseURL : "https://challenge-ab023-default-rtdb.asia-southeast1.firebaseddatabase.app" , 
    projectId : "challenge-ab023" , 
    storageBucket : "challenge-ab023.appspot.com" , 
    messagingSenderId : "407175348461" , 
    appId : "1:407175348461:web:df2a3dc9773771e0cc4ce4" , 
    measurementId : "G-TXRQEQV56Y" 
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();