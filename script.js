// JavaScript code will go here
document.addEventListener("DOMContentLoaded", function() {
    const englishButton = document.getElementById("english-button");
    const frenchButton = document.getElementById("french-button");
    const englishContent = document.getElementById("english-content");
    const frenchContent = document.getElementById("french-content");
    
    englishButton.addEventListener("click", function() {
        englishContent.style.display = "block";
        frenchContent.style.display = "none";
    });

    frenchButton.addEventListener("click", function() {
        englishContent.style.display = "none";
        frenchContent.style.display = "block";
    });
});
