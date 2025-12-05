

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // FOR FILE UPLOADS

const firebaseConfig = {
     apiKey: "AIzaSyBFQ4QPwv9FblzgQruG1cmnsMFIvvdxhGg",
    authDomain: "ipfc-management.firebaseapp.com",
    projectId: "ipfc-management",
    storageBucket: "ipfc-management.firebasestorage.app",
    messagingSenderId: "14167176292",
    appId: "1:14167176292:web:685b74c18a9ec287995b71",
    measurementId: "G-CWYTGS3B4B"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
