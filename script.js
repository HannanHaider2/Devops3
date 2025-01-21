// Get the button and the paragraph element
const button = document.getElementById('changeTextBtn');
const textParagraph = document.getElementById('text');

// Add an event listener to the button
button.addEventListener('click', function() {
    textParagraph.textContent = "The text has been changed! Thank you for clicking.";
});
