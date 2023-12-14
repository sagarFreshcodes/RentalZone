// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBv3FWp8eUXaC9XDEoY5T09SSOTrzH6mzY",
  authDomain: "rentalzone-1d306.firebaseapp.com",
  projectId: "rentalzone-1d306",
  storageBucket: "rentalzone-1d306.appspot.com",
  messagingSenderId: "1042405034396",
  appId: "1:1042405034396:web:b5e12993a5ba905360a059"
};
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;