import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyCyGUiK-odmT8aYY1zCdWv28NOxr5FUDnU",
    authDomain: "hotel-customer-system.firebaseapp.com",
    databaseURL: "https://hotel-customer-system-default-rtdb.firebaseio.com",
    projectId: "hotel-customer-system",
    storageBucket: "hotel-customer-system.appspot.com",
    messagingSenderId: "482838720811",
    appId: "1:482838720811:web:f6486a9456903618c9956e",
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);


export const storage = getStorage(app);


