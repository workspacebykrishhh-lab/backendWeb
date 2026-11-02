// Quiz checker shared by all four pages
function checkQuiz() {
  var questions = document.querySelectorAll('.q');
  var score = 0;

  questions.forEach(function (q) {
    var answer = q.getAttribute('data-ans');
    var labels = q.querySelectorAll('label');
    var chosen = q.querySelector('input:checked');

    labels.forEach(function (l) { l.classList.remove('correct', 'wrong'); });

    labels.forEach(function (l) {
      var val = l.querySelector('input').value;
      if (val === answer) l.classList.add('correct');
      if (chosen && chosen.value === val && val !== answer) l.classList.add('wrong');
    });

    if (chosen && chosen.value === answer) score++;
  });

  var box = document.getElementById('score');
  var total = questions.length;
  var msg = score === total ? 'Excellent!' : score >= total / 2 ? 'Good job!' : 'Keep practising!';
  box.style.display = 'block';
  box.textContent = 'You scored ' + score + ' / ' + total + '. ' + msg;
  box.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function resetQuiz() {
  document.querySelectorAll('.q input').forEach(function (i) { i.checked = false; });
  document.querySelectorAll('.q label').forEach(function (l) { l.classList.remove('correct', 'wrong'); });
  document.getElementById('score').style.display = 'none';
}
