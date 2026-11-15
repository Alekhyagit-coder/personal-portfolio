
// Display a welcome message in the browser console
console.log("Welcome to Alekya's Portfolio!");

// Select all navigation links
const navLinks = document.querySelectorAll("nav ul li a");

// Add smooth navigation
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        console.log("Navigating to: " + this.textContent);
    });
});
