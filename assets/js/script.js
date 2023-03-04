let container = document.querySelector('.container');
let header = document.querySelector('#header');
let cards = document.querySelector('#cards');
let choices = document.querySelector('#choices');
let seconds = document.querySelector('.seconds');
const clickStart = $('.start');
const quizStart = $('.header');

container.addEventListener('click', function(event) {
let start = event.target;

if (start.matches('.start')) {
    header.style.display = 'none';
    cards.style.display = 'block';
    question.style.display = 'block';
    choices.style.display = 'block'
    }
});

clickStart.on('click', function() {
    startTimer();
    displayQuestion(questions[0]);
})


function startTimer() {
    var timeLeft = 10;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        console.log('Timer has started.');
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 0) {
        seconds.textContent = timeLeft + 's';
        // Decrement `timeLeft` by 1
        timeLeft--;
      }  
      else {
        // Once `timeLeft` gets to 0, set `seconds` to an empty string
        seconds.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
      }

      if (timeLeft < 6) {
        $('.seconds').css({'background-color':'yellow'});
      }
    }, 1000);
  };

  let currentQuestionIndex = 0;

  const questions = [
      {
        question: "What is the capital of France?",
        answers: ["London", "Paris", "Madrid", "Berlin"],
        correctAnswer: 1 // Index of the correct answer in the answers array
      },
      {
        question: "What is the largest mammal in the world?",
        answers: ["Elephant", "Giraffe", "Blue whale", "Rhinoceros"],
        correctAnswer: 2
      },
      {
        question: "who is the cutest labradoodle in the world?",
        answers: ["Ben", "Remi", "Archie", "Cami"],
        correctAnswer: 1
        },
        {
        question: "Who is the best husband in the world?",
        answers: ["Archie", "Remi", "Ben", "Cami"],
        correctAnswer: 2
        },
    ];
    
    function displayQuestion(question) {
        console.log('Questions are displaying.');
        let questionElement = document.querySelector('#question');
        let newQuestion = document.createElement('p');
        newQuestion.textContent = question.question;
        questionElement.appendChild(newQuestion);
  
        let choicesElement = document.querySelector("#choices");
        question.answers.forEach((answer, index) => {
        const answerButton = document.createElement("button");
        answerButton.textContent = answer;
        answerButton.addEventListener("click", () => {
          if (index === question.correctAnswer) {
            // Display next question if answer is correct
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
              const nextQuestion = questions[currentQuestionIndex];
              questionElement.innerHTML = "";
              displayQuestion(nextQuestion);
            } else {
              // End of quiz, display results
              displayResults();
            }
          } else {
            // Incorrect answer, display message
            const messageElement = document.createElement("p");
            messageElement.textContent = "Incorrect, please try again";
            choicesElement.appendChild(messageElement);
          }
        });
        answersElement.appendChild(answerButton);
      });
      (choicesElement).appendChild(answersElement);
    }
  
    function displayResults() {
      const score = questions.filter(question => question.correctAnswer === question.selectedAnswer).length;
      const resultsElement = document.createElement("h2");
      resultsElement.textContent = `You scored ${score} out of ${questions.length}`;
      document.body.innerHTML = "";
      document.body.appendChild(resultsElement);
    };