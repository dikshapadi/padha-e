// Import Firebase and initialize it
importScripts("https://www.gstatic.com/firebasejs/9.3.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.3.0/firebase-database-compat.js");



const firebaseConfig = {
  apiKey: "AIzaSyBD6ZsOT1P4lPZbQ0HVYHZrPGvaPk274ds",
  authDomain: "sih-e-f67f9.firebaseapp.com",
  databaseURL: "https://sih-e-f67f9-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "sih-e-f67f9",
  storageBucket: "sih-e-f67f9.appspot.com",
  messagingSenderId: "113038032158",
  appId: "1:113038032158:web:6b01cde8843a62e8841d0f",
  measurementId: "G-FWVHBTC79W"
};



firebase.initializeApp(firebaseConfig);
const database = firebase.database();

console.log("hello");

// Listen for messages from the main thread
self.addEventListener("message", async (event) => {
  const filterCriteria = event.data;
  console.log("Received filter criteria in service worker:", filterCriteria);
  if (filterCriteria.role === 'mentor' && filterCriteria.className) {
    // Fetch the data from Firebase based on the filter criteria
    const mentorList = await filterMentors(filterCriteria);

    // Send the filtered mentor list back to the main thread
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage(mentorList); // Use client.postMessage instead of self.postMessage
      });
    });
  }
});

// Function to filter mentors based on criteria
async function filterMentors(filterCriteria) {
  console.log("Filtering mentors with criteria:", filterCriteria);
  const mentorList = [];

  // Get a reference to the "users" node in the Firebase Realtime Database
  const usersRef = database.ref('users');

  // Fetch user data from Firebase
  const snapshot = await usersRef.once('value');
  const userData = snapshot.val();


  // Iterate through the user data and filter mentors
  for (const userId in userData) {
    const user = userData[userId];

    // Check if the user meets the filter criteria
    if (user.youAre === 'mentor' && user.class === filterCriteria.className) {
      mentorList.push({
        userId: userId,
        name: user.name
      });
    }
  }
  console.log(mentorList);

  return mentorList;
}
