   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries
 
   // Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   const firebaseConfig = {
     apiKey: "AIzaSyBD6ZsOT1P4lPZbQ0HVYHZrPGvaPk274ds",
     authDomain: "sih-e-f67f9.firebaseapp.com",
     projectId: "sih-e-f67f9",
     storageBucket: "sih-e-f67f9.appspot.com",
     messagingSenderId: "113038032158",
     appId: "1:113038032158:web:6b01cde8843a62e8841d0f",
     measurementId: "G-FWVHBTC79W"
   };
 
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);