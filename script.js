// Listen for the event that the HTML document has been fully loaded and parsed.
document.addEventListener("DOMContentLoaded", () => {

    // Select all elements with the class name 'review' and store them in the 'reviews' variable.
    const reviews = document.querySelectorAll('.review');
    
    // Initialize a variable to keep track of the current review being displayed.
    let currentIndex = 0;

    // Define a function to display the review that corresponds to the given index.
    function showReview(index) {
        // Loop through each review element.
        reviews.forEach((review, i) => {
            // If the loop index matches the specified index, display the review; otherwise, hide it.
            review.style.display = i === index ? 'flex' : 'none';
        });
    }

    // Define a function to move to the next review.
    function forwardFunction() {
        // Increment the current index and loop back to the start if it exceeds the number of reviews.
        currentIndex = (currentIndex + 1) % reviews.length;
        // Call showReview to display the review at the new currentIndex.
        showReview(currentIndex);
    }

    // Define a function to move to the previous review.
    function backFunction() {
        // Decrement the current index and ensure it's not negative by adding the total number of reviews before modulo.
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        // Call showReview to display the review at the new currentIndex.
        showReview(currentIndex);
    }

    // Define a function to display a random review.
    function surpriseMe() {
        let randomIndex;
        do {
            // Generate a random index value.
            randomIndex = Math.floor(Math.random() * reviews.length);
        // Continue generating a random index if it matches the current index.
        } while (randomIndex === currentIndex);
        // Set the current index to the new random index.
        currentIndex = randomIndex;
        // Call showReview to display the review at the new currentIndex.
        showReview(currentIndex);
    }

    // Show the first review upon initialization.
    showReview(currentIndex);

    // Add click event listeners to the forward, backward, and surprise me buttons.
    document.getElementById("fwd-btn").addEventListener("click", forwardFunction);
    document.getElementById("bak-btn").addEventListener("click", backFunction);
    document.getElementById("sp-btn").addEventListener("click", surpriseMe);
});