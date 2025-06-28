// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOH8OnAKoATdQwhus3MtY1WkNw_uKnyPw",
  authDomain: "mr-happy-blog-admin.firebaseapp.com",
  projectId: "mr-happy-blog-admin",
  storageBucket: "mr-happy-blog-admin.firebasestorage.app",
  messagingSenderId: "898141460751",
  appId: "1:898141460751:web:9542cad34b5410153fc67a",
  measurementId: "G-TNNLNS4HZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);