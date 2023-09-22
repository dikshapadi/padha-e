// Get references to HTML elements
const popup = document.getElementById("screenTimePopup");
const closePopupButton = document.getElementById("closePopup");

function showPopup() {
    popup.style.display = "block";
    overlay.style.display = "block";
  }
  
// Function to show the popup
function showPopup() {
  popup.style.display = "block";
}

// Function to close the popup
function closePopup() {
  popup.style.display = "none";
}

// Show the popup after a certain time (e.g., 30 minutes)
const popupTimer = setInterval(showPopup, 3000);

// Close the popup when the close button is clicked
closePopupButton.addEventListener("click", closePopup);
