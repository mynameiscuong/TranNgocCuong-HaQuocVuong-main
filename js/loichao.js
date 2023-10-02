function togglePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = (popup.style.display === "none") ? "block" : "none";
  }

  // Automatically display the popup when the page loads
  window.addEventListener("DOMContentLoaded", function() {
    togglePopup();
  });