// import db from '../../config/firebase.js';
// import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

// const mentorshipForm = document.getElementById("mentorform");

// mentorshipForm.addEventListener("submit", async (e) => {
//   e.preventDefault(); // Prevent the form from submitting in the traditional way

//   // Get the form data
//   const menteeName = document.getElementById("menteeName").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const gender = document.getElementById("gender").value;

//   try {
//     const docRef = await addDoc(collection(db, "mentorshipDetails"), {
//       menteeName: menteeName,
//       email: email,
//       password: password,
//       gender: gender
//     });
//     mentorshipForm.reset();
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
  
// });
