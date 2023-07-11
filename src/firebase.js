import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAP_VtMYZEFcEHT99sDnuae77DjPALndBM",
  authDomain: "code-clause-login-signup.firebaseapp.com",
  projectId: "code-clause-login-signup",
  storageBucket: "code-clause-login-signup.appspot.com",
  messagingSenderId: "82363083402",
  appId: "1:82363083402:web:2e7322d2dba8cfbc3c1b73",
  measurementId: "G-K2H7Y1ZQ2Y",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
