// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const textAreaInput = document.getElementById("text");
const stats = document.getElementById("stat");

// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.
textAreaInput.addEventListener("input", function wordCount() {
  let charCount = textAreaInput.value.length;
  let input = document.getElementById("text").value;
  let cnt = 0;
  let words = input.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i] != "") {
      cnt++;
    }
    stats.innerHTML =
      "You've written " + cnt + " words and " + charCount + " characters.";
  }
});
