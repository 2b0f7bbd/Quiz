const CORRECT_ANSWERS = ['A', 'B', 'A', 'B'],
  form = document.querySelector('.quiz-form'),
  result = document.querySelector('.result'),
  span = document.querySelector('span');

form.addEventListener('submit', e => {
  e.preventDefault();
  //Score
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];
  userAnswers.forEach((answer, index) => {
    if (answer === CORRECT_ANSWERS[index]) {
      score += 25;
    }
  });

  //Animated score and etc.
  scrollTo(0, 0);
  result.style.display = 'block';
  let output = 0;
  const timer = setInterval(() => {
    span.textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
