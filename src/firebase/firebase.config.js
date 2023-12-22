// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyAHfJ8svNttkc9n3_n8OkXp3X04Yqys0XM",
    // authDomain: "task-manager-scic-a8.firebaseapp.com",
    // projectId: "task-manager-scic-a8",
    // storageBucket: "task-manager-scic-a8.appspot.com",
    // messagingSenderId: "759153383153",
    // appId: "1:759153383153:web:0bf0b9448691b9fecabb50"

    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};




// Initialize Firebase
export const app = initializeApp(firebaseConfig);