import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hpp from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqtOP7z3fVsGOD1RXrxbD0E0l3vf_GA04",
  authDomain: "cart-ed2f8.firebaseapp.com",
  projectId: "cart-ed2f8",
  storageBucket: "cart-ed2f8.appspot.com",
  messagingSenderId: "830145237431",
  appId: "1:830145237431:web:7a3606d097395f46489832"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hpp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



