import firebase from "firebase/compat/app"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCnTWIH0IuYHG5QoUOBTenVGaSyQo8p0rc",
  authDomain: "authentication-project-22bf1.firebaseapp.com",
  projectId: "authentication-project-22bf1",
  storageBucket: "authentication-project-22bf1.appspot.com",
  messagingSenderId: "376880844334",
  appId: "1:376880844334:web:0b009c7a5357510c9699bf"
};


const app =firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider =  new GoogleAuthProvider()


