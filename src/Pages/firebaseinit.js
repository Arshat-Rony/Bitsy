// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0TH4tpN_JZJ8K7kmBl323YhdFk1H08Dw",
    authDomain: "bits-cf981.firebaseapp.com",
    projectId: "bits-cf981",
    storageBucket: "bits-cf981.appspot.com",
    messagingSenderId: "616705344759",
    appId: "1:616705344759:web:920791fe0accb102f93ff2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app)


export default auth;