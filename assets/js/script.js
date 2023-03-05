let container = document.querySelector('.container');
let header = document.querySelector('#header');
let cards = document.querySelector('#cards');
let seconds = document.querySelector('.seconds');
const clickStart = $('.start');
const quizStart = $('.header');
let choicesElement = document.querySelector('#choices');
let questionElement = document.querySelector('#question');
let currentQuestionIndex = 0;
let currentScore = 0;
let timeLeft = 25;
let timerRunning = false;

clickStart.on('click', function() {
    header.style.display = 'none';
    cards.style.display = 'flex';
    question.style.display = 'flex';
    choicesElement.style.display = 'flex'
    startTimer();
    displayQuestion(questions[0]);
    });

function startTimer() {
    timerRunning = true;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        console.log('Timer has started.');
    if (!timerRunning) {
        clearInterval(timeInterval);
        }
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
        displayResults();
      }
      if (timeLeft < 6) {
        $('.seconds').css({'background-color':'yellow'});
      }
    }, 1000);
  };

const questions = [
      {
          question: 'What is the capital of France?',
          answers: ['London', 'Paris', 'Madrid', 'Berlin'],
          correctAnswer: 1 // Index of the correct answer in the answers array
        },
        {
            question: 'What is the largest mammal in the world?',
            answers: ['Elephant', 'Giraffe', 'Blue whale', 'Rhinoceros'],
            correctAnswer: 2
        },
        {
            question: 'who is the cutest labradoodle in the world?',
            answers: ['Ben', 'Remi', 'Archie', 'Cami'],
            correctAnswer: 1
        },
        {
            question: 'Who is the best husband in the world?',
            answers: ['Archie', 'Remi', 'Ben', 'Cami'],
            correctAnswer: 2
        },
    ];
    

function displayQuestion(question) {
    console.log('Questions are displaying.');

    let newQuestion = document.createElement('p');
    newQuestion.textContent = question.question;
    questionElement.appendChild(newQuestion);

    let answersElement = document.createElement('div');
    question.answers.forEach((answer, index) => {
    const answerButton = document.createElement('button');

    answerButton.textContent = answer;

    answerButton.addEventListener('click', () => {
        
        if (index === question.correctAnswer) {
            // Display next question if answer is correct
            currentScore++
        
        } else {
            // Incorrect answer, display message
            const messageElement = document.createElement('p');
            messageElement.textContent = 'Incorrect';
            choicesElement.appendChild(messageElement);
            timeLeft -= 5;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            const nextQuestion = questions[currentQuestionIndex];
            questionElement.innerHTML = '';
            displayQuestion(nextQuestion);
        } else {
            displayResults();
        }

    });
        answersElement.appendChild(answerButton);
    });
    choicesElement.innerHTML = '';
    choicesElement.appendChild(answersElement);
    }
    


    function displayResults() {
        timerRunning = false;
        questionElement.innerHTML = '';
        choicesElement.innerHTML = '';
        let score = currentScore;
        const resultsElement = document.querySelector('.card2');
        resultsElement.innerHTML = `You answered ${score} out of ${questions.length} correctly.`;

        let highScore = document.querySelector('.highScore');

        highScore.innerHTML = timeLeft;
    };