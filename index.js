document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector("button[type='submit']");
  const numbers = document.querySelectorAll(".number");
  const thankYouContainer = document.querySelector(".thanks.container");
  const ratingDisplay = document.querySelector(".selected p");
  const errorMessage = document.querySelector(".error-message");
  let selectedRating = null;

  // Event listener for the number boxes
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      // Remove active class from all numbers
      numbers.forEach((num) => num.classList.remove("active"));
      // Add active class to the clicked number
      number.classList.add("active");
      // Set the selected rating
      selectedRating = number.dataset.value;
      ratingDisplay.textContent = `You selected ${selectedRating} out of 5`;
      // Hide error message if a number is selected
      errorMessage.style.display = "none";
    });
  });

  // Event listener for the submit button
  submitButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission
    if (selectedRating) {
      // Hide the main container
      document.querySelector(".container").style.display = "none";
      // Show the thank you container
      thankYouContainer.classList.add("visible");

      setTimeout(() => {
        thankYouContainer.style.display = "block"; // Ensure it's block for animation
      }, 10);
    } else {
      // Show error message
      errorMessage.textContent = "Please select a number";
      errorMessage.style.display = "block";
    }
  });
});
