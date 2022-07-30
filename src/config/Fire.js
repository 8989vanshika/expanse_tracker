//import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database"
const config ={
    apiKey: "AIzaSyCy8xLBCiLT-Ft-8M_LnaCsVBVMagem_7U",
    authDomain: "expanse-tracker-3ceb1.firebaseapp.com",
    projectId: "expanse-tracker-3ceb1",
    storageBucket: "expanse-tracker-3ceb1.appspot.com",
    messagingSenderId: "228712084327",
    appId: "1:228712084327:web:2033e0ef8ae319a61ab5c2",
    measurementId: "G-Y75NN0PPR9",
    databaseURL: "https://expanse-tracker-3ceb1-default-rtdb.firebaseio.com"
}

const fire= firebase.initializeApp(config)
//export const dd=firebase.database();
export default fire;