// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
    // apiKey: "AIzaSyBuuYENvaZKEzaf2OjEaGTL7NAHIlSkiFo",
    // authDomain: "service-review-client-eb270.firebaseapp.com",
    // projectId: "service-review-client-eb270",
    // storageBucket: "service-review-client-eb270.appspot.com",
    // messagingSenderId: "410481572509",
    // appId: "1:410481572509:web:6d80fee38b8c6f48b87274"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;