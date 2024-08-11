/* Rankmath FAQs Accordion */
function initAccordion(accordionSelector, questionSelector, answerSelector) {
    document.addEventListener('DOMContentLoaded', function () {
        const accordion = document.querySelector(accordionSelector);
        if (!accordion) return; // handle error if accordion not found
        const questions = accordion.querySelectorAll(questionSelector);
        questions.forEach((question) => {
            const answer = question.nextElementSibling;
            if (!answer || !answer.classList.contains(answerSelector.slice(1))) return; // handle error if answer not found
            question.setAttribute('aria-expanded', 'false');
            answer.style.maxHeight = 0;
            question.addEventListener('click', function () {
                // Close all open accordions
                questions.forEach((q) => {
                    if (q !== this) {
                        q.setAttribute('aria-expanded', 'false');
                        q.classList.remove('active');
                        q.nextElementSibling.classList.remove('active');
                        q.nextElementSibling.style.maxHeight = 0;
                    }
                });
                // Toggle the clicked accordion
                this.classList.toggle('active');
                answer.classList.toggle('active');
                answer.style.maxHeight = answer.classList.contains('active') ? answer.scrollHeight + 'px' : 0;
                this.setAttribute('aria-expanded', this.classList.contains('active') ? 'true' : 'false');
            });
        });
    });
}
initAccordion('#rank-math-faq', '.rank-math-question', '.rank-math-answer');