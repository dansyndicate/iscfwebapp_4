// Import the functions you need from the SDKs you need
//import {initializeApp} from "firebase/app";
import {initializeApp} from 'firebase/app';




import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgsLlgKMYIQPrxwZxpFN3nPeMllKdTUGs",
  authDomain: "iscf-tp1-a9dfc.firebaseapp.com",
  databaseURL: "https://iscf-tp1-a9dfc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "iscf-tp1-a9dfc",
  storageBucket: "iscf-tp1-a9dfc.appspot.com",
  messagingSenderId: "658355116524",
  appId: "1:658355116524:web:b5658dcd943015183a48c9",
  measurementId: "G-MKTHGVVHM4"
};


//const app =  initializeApp(firebaseConfig);


const app = initializeApp(firebaseConfig)


export default app;