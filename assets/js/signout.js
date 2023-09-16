if (!firebase.apps.length) {
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
  }
  
  // Sign out function
  function signOut() {
    firebase.auth().signOut()
    .then(function() {
      // Sign-out successful.
      window.location.href = 'main'; // redirect to main.ejs
    })
    .catch(function(error) {
      // An error happened.
      console.log("Sign out failed: ", error);
    });
  }
  