(function() {
    const questions = document.querySelectorAll('.quest');
    questions.forEach(question => {
      question.addEventListener('click', () => {
        question.classList.toggle('active');
      });
    });
  })();
  