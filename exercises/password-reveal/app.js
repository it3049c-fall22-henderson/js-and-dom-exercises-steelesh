// 🤖: create 2 constants with references to the password input and the reveal button from the DOM
const passwordInput = document.getElementById("#password");
const visibilityToggle = document.getElementById("#togglePassword");

// 🤖: Create an Event Listener on the password reveal button
// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.
visibilityToggle.onclick = function () {};

// Provided for you - prevent form submit
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
