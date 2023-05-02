// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ722j0XQe9m4lyIl3LoNkD80bUNf--lQ",
  authDomain: "chef-recipe-client.firebaseapp.com",
  projectId: "chef-recipe-client",
  storageBucket: "chef-recipe-client.appspot.com",
  messagingSenderId: "111510754749",
  appId: "1:111510754749:web:bec9c5e1ff4c49aa54eed4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;