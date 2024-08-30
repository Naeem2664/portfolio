import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider,FacebookAuthProvider} from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyB-P0WHr7I4uvF9MH9kEgKmH258p7Q4Z_Y",
  authDomain: "my-portfolio-7a9a5.firebaseapp.com",
  databaseURL: "https://my-portfolio-7a9a5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-portfolio-7a9a5",
  storageBucket: "my-portfolio-7a9a5.appspot.com",
  messagingSenderId: "153466176377",
  appId: "1:153466176377:web:e3751c19e192928a67a5a8",
  measurementId: "G-BP79BHQEME"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth()
const analytics = getAnalytics(app);
const googleAuthProvider=new GoogleAuthProvider()
const facebookAuthProvider=new FacebookAuthProvider()

export {app,auth,analytics,googleAuthProvider,facebookAuthProvider};