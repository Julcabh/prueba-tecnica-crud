import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwvNSKiaVn3GpnABBTRy-TjVg4JtXv_io",
  authDomain: "prueba-tecnica-crud.firebaseapp.com",
  projectId: "prueba-tecnica-crud",
  storageBucket: "prueba-tecnica-crud.appspot.com",
  messagingSenderId: "547193840144",
  appId: "1:547193840144:web:db4ef0b6ff137ad44f2095"
};
// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
