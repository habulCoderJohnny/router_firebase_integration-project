// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDqlGCUy-53XPmRbP1Zycu_K0GoPnblrg",
  authDomain: "router-firebase-integration-1.firebaseapp.com",
  projectId: "router-firebase-integration-1",
  storageBucket: "router-firebase-integration-1.appspot.com",
  messagingSenderId: "265668933684",
  appId: "1:265668933684:web:b9cb841ffde2f24fc13261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;