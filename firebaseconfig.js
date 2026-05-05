
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyAeWsam90eoqUpWZQVSKbdnX_S5Nb-IxCM",
  authDomain: "projeto-gilson-6fd9e.firebaseapp.com",
  projectId: "projeto-gilson-6fd9e",
  storageBucket: "projeto-gilson-6fd9e.firebasestorage.app",
  messagingSenderId: "1019080656893",
  appId: "1:1019080656893:web:9ec95cebb5de1e5dea7b94"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
