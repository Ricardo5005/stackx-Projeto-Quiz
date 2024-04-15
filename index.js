const form = document.getElementById('quiz-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const question1 = document.querySelector('input[name="question1"]:checked');
  const question2 = document.querySelectorAll('input[name="question2"]:checked');
  const question3 = document.getElementById('question3').value;

  if (!question1) {
    alert('Por favor, selecione uma opção para a Pergunta 1.');
    return;
  }

  if (question2.length === 0) {
    alert('Por favor, selecione pelo menos uma opção para a Pergunta 2.');
    return;
  }

  if (question3.trim() === '') {
    alert('Por favor, preencha a resposta para a Pergunta 3.');
    return;
  }

  processAnswers(question1.value, Array.from(question2).map(q => q.value), question3);
});
function processAnswers(question1, question2, question3) {
    // Aqui você pode adicionar sua lógica para processar as respostas e determinar o resultado.
    // Por exemplo, você pode comparar as respostas com as respostas corretas e contar o número de acertos.
  
    const correctAnswers = ['option1', 'option2', 'correta'];
    let score = 0;
  
    if (question1 === correctAnswers[0]) {
      score++;
    }
  
    question2.forEach((answer, index) => {
      if (answer === correctAnswers[index + 1]) {
        score++;
      }
    });
  
    if (question3 === correctAnswers[3]) {
      score++;
    }
  
    // Exibir uma mensagem ao usuário com o resultado do quiz/formulário.
    alert(`Você acertou ${score} de 3 perguntas!`);
  }