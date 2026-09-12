const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
    question.addEventListener("click", () => {

        // Close all other answers
        questions.forEach(otherQuestion => {
            if (otherQuestion !== question) {
                otherQuestion.nextElementSibling.style.maxHeight = null;
                otherQuestion.querySelector("span").textContent = "+";
            }
        });

        const answer = question.nextElementSibling;
        const icon = question.querySelector("span");

        // Open or close the clicked answer
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            icon.textContent = "+";
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = "−";
        }
    });
});