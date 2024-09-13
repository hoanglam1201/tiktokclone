// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getDatabase, ref, child, get  } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// const dbRef = ref(database);
// get(child(dbRef, `users`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD-aDcOu5VcOVeNK8XrlcEJtI-HJo639ZA",
//   authDomain: "tiktokclone-1f9fd.firebaseapp.com",
//   databaseURL: "https://api-firebase-16e33-default-rtdb.firebaseio.com",
//   projectId: "tiktokclone-1f9fd",
//   storageBucket: "tiktokclone-1f9fd.appspot.com",
//   messagingSenderId: "307181960683",
//   appId: "1:307181960683:web:694a718b2c07b9b8b7adae",
//   measurementId: "G-6VRM7XWPY3"
// };

const firebaseConfig = {
  apiKey: "AIzaSyA9QQtvjKpvJshnillS8FcJXNNdH9MvgMw",
  authDomain: "api-firebase-16e33.firebaseapp.com",
  databaseURL: "https://api-firebase-16e33-default-rtdb.firebaseio.com",
  projectId: "api-firebase-16e33",
  storageBucket: "api-firebase-16e33.appspot.com",
  messagingSenderId: "330611949139",
  appId: "1:330611949139:web:c0fcf1a2933047899550a6"
};

const provider = new GoogleAuthProvider();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
console.log(auth);
// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

export {database, auth};