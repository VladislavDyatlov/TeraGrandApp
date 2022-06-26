import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCYX3jFcrt8gk7GchsrCyM1xHnbC-KYD0M",
  authDomain: "carapp-5f010.firebaseapp.com",
  projectId: "carapp-5f010",
  storageBucket: "carapp-5f010.appspot.com",
  messagingSenderId: "890111590400",
  appId: "1:890111590400:web:ed7225f16f17951c5658e5",
  measurementId: "G-R4VVSY3221"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);